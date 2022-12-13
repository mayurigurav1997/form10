import './App.css';
import { Formik } from 'formik';
import { useState } from "react";

function App() {

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

        onSubmit={async (values) => {
          values && postData(values)
          console.log(values)
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
            {/* {errors.email && touched.email && errors.email} */}
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
