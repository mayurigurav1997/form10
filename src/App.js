import './App.css';
import { Formik } from 'formik';
import { useState } from "react";
import * as Yup from 'yup';
import { InputText } from 'primereact/inputtext';

function App() {
  const validationSchema = Yup.object({
    firstName: Yup.string().max(10).required("Please enter your First Name"),
    lastName: Yup.string().max(10).required("Please enter your Last Name"),
    email: Yup.string().email().required("Please enter your email"),

  })
  const [values, setValues] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    suffix: "",
    email: ""
  });
  function postData(agentValues) {
    setValues({
      firstName: agentValues.firstName,
      middleName: agentValues.middleName,
      lastName: agentValues.lastName,
      suffix: agentValues.suffix,
      email: agentValues.email,

    });
  };

  return (
    <div className="App">
      <Formik
        initialValues={values}
        validationSchema={validationSchema}
        onSubmit={async (values, action) => {
          values && postData(values)
          // Ctrl + Alt + L
          console.log("🚀 ~ file: App.js:25 ~ onSubmit={ ~ values", values)
          action.resetForm();  //it will clear all the fiels value input once we submit

        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (

          <form onSubmit={handleSubmit}>
            <div className="flex flex-column ml-8 mb-4 w-20rem">
              <label htmlFor="firstName" className="text-left mb-2">First Name</label>
              <InputText
                id="firstName"
                name="firstName"
                value={values.firstName}
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="firstName"
                className="w-14rem outline-none p-inputtext-sm mb-1" />
              {errors.firstName && touched.firstName &&
                <small className="text-xs p-error block">{errors.firstName}</small>
              }
            </div>

            <div className="flex flex-column ml-8 mb-4 w-20rem">
              <label htmlFor="middleName" className="text-left mb-2">Middle Name</label>
              <InputText
                id="middleName"
                name="middleName"
                value={values.middleName}
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="middleName"
                className="w-14rem outline-none p-inputtext-sm mb-1" />
            </div>

            <div className="flex flex-column ml-8 mb-4 w-20rem">
              <label htmlFor="lastName" className="text-left mb-2">Last Name</label>
              <InputText
                id="lastName"
                name="lastName"
                value={values.lastName}
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="lastName"
                className="w-14rem outline-none p-inputtext-sm mb-1" />
              {errors.lastName && touched.lastName &&
                <small className="text-xs p-error block">{errors.lastName}</small>
              }
            </div>

            <div className="flex flex-column ml-8 mb-4 w-20rem">
              <label htmlFor="email" className="text-left mb-2">Email</label>
              <InputText
                id="email"
                name="email"
                value={values.email}
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="email"
                className="w-14rem outline-none p-inputtext-sm mb-1" />
              {errors.email && touched.email &&
                <small className="text-xs p-error block">{errors.email}</small>
              }
            </div>

            <button type="submit">
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div >
  );
}

export default App;
