import './App.css';
import { Formik } from 'formik';
import { useState } from "react";
import * as Yup from 'yup';

function App() {
  const validationSchema = Yup.object({
    firstName: Yup.string().min(4).max(15).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email")

  })
  const [values, setValues] = useState({
    firstName: "",
    email: ""
  });
  function postData(agentValues) {
    setValues({
      firstName: agentValues.firstName,
      email: agentValues.email
    });
  };

  return (
    <div className="App">
      <Formik
        initialValues={values}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          values && postData(values)
          // Ctrl + Alt + L
          console.log("🚀 ~ file: App.js:25 ~ onSubmit={ ~ values", values)


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
            <label htmlFor="firstName">Name</label>
            <input
              id="firstName"
              name="firstName"
              value={values.firstName}
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Name"
            />
            <p style={{ color: "red" }}>{errors.firstName}</p>
            <br /><br /><br />

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
            {/* {errors.password && touched.password && errors.password} */}
            <button type="submit">
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
