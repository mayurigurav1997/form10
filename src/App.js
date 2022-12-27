import './App.css';
import { Formik } from 'formik';
import { useState } from "react";
import * as Yup from 'yup';
import { InputText } from 'primereact/inputtext';

function App() {
  const validationSchema = Yup.object({
    firstName: Yup.string().min(4).max(15).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email")

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
          action.resetForm();

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
            <div className="flex flex-column ml-8 mb-5 w-20rem">
              <label htmlFor="firstName" className="text-left mb-2">First Name</label>
              <InputText
                id="firstName"
                name="firstName"
                value={values.firstName}
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="firstName"
                className="w-10rem p-1 outline-none" />
              {errors.firstName && touched.firstName &&
                <small className="text-xs p-error block">{errors.firstName}</small>
              }
            </div>

            <br />

            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                value={values.email}
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Email"
              />
              {errors.email && touched.email &&
                <span className="text-xs">{errors.email}</span>
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
