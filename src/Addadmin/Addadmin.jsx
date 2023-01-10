import { Formik } from 'formik';
import { useEffect, useState } from "react";
import * as Yup from 'yup';
import { InputText } from 'primereact/inputtext';
import { useSelector, useDispatch } from "react-redux";
import { getAdminData } from "../Feature/Admin/AdminSlice"

function Addadmin() {
    const dispatch = useDispatch();
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

    useEffect(() => {
        dispatch(getAdminData());
    }, [])

    return (
        <div className="Global">
            <Formik
                initialValues={values}
                validationSchema={validationSchema}
                onSubmit={async (values, action) => {
                    values && postData(values)
                    // Ctrl + Alt + L
                    console.log("🚀 ~ file: Addadmin.js:25 ~ onSubmit={ ~ values", values)
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
                            <label htmlFor="firstName" className="text-left mb-2">FIRST NAME</label>
                            <InputText
                                id="firstName"
                                name="firstName"
                                value={values.firstName}
                                type="text"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="First Name"
                                className="w-14rem outline-none p-inputtext-sm mb-1" />
                            {errors.firstName && touched.firstName &&
                                <small className="text-xs p-error block">{errors.firstName}</small>
                            }
                        </div>

                        <div className="flex flex-column ml-8 mb-4 w-20rem">
                            <label htmlFor="middleName" className="text-left mb-2">MIDDLE NAME</label>
                            <InputText
                                id="middleName"
                                name="middleName"
                                value={values.middleName}
                                type="text"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Middle Name"
                                className="w-14rem outline-none p-inputtext-sm mb-1" />
                        </div>

                        <div className="flex flex-column ml-8 mb-4 w-20rem">
                            <label htmlFor="lastName" className="text-left mb-2">LAST NAME</label>
                            <InputText
                                id="lastName"
                                name="lastName"
                                value={values.lastName}
                                type="text"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Last Name"
                                className="w-14rem outline-none p-inputtext-sm mb-1" />
                            {errors.lastName && touched.lastName &&
                                <small className="text-xs p-error block">{errors.lastName}</small>
                            }
                        </div>

                        <div className="flex flex-column ml-8 mb-4 w-20rem">
                            <label htmlFor="suffix" className="text-left mb-2">SUFFIX</label>
                            <InputText
                                id="suffix"
                                name="suffix"
                                value={values.suffix}
                                type="text"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Suffix"
                                className="w-14rem outline-none p-inputtext-sm mb-1" />
                        </div>

                        <div className="flex flex-column ml-8 mb-4 w-20rem">
                            <label htmlFor="email" className="text-left mb-2">EMAIL</label>
                            <InputText
                                id="email"
                                name="email"
                                value={values.email}
                                type="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Email"
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

export default Addadmin;
