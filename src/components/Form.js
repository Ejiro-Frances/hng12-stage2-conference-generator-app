// // import { useState, useEffect } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// import PropTypes from "prop-types";

// const RegistrationForm = ({ onSubmit }) => (
//   <Formik
//     initialValues={{ fullName: "", email: "", avatarUrl: "" }}
//     validationSchema={Yup.object({
//       fullName: Yup.string().required("Full Name is required"),
//       email: Yup.string()
//         .email("Invalid email format")
//         .required("Email is required"),
//       avatarUrl: Yup.string()
//         .matches(
//           /https?:\/\/res\.cloudinary\.com\/.+/,
//           "Only Cloudinary URLs are allowed"
//         )
//         .required("Avatar URL is required"),
//     })}
//     onSubmit={onSubmit}
//   >
//     {({ errors }) => (
//       <Form>
//         <div>
//           <label>Full Name:</label>
//           <Field type="text" name="fullName" placeholder="Enter your name" />
//           {errors.fullName && (
//             <div style={{ color: "red" }}>{errors.fullName}</div>
//           )}
//           <ErrorMessage
//             name="fullName"
//             component="div"
//             style={{ color: "red" }}
//           />
//         </div>

//         <div>
//           <label>Email:</label>
//           <Field type="email" name="email" placeholder="Enter your email" />
//           {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
//           <ErrorMessage name="email" component="div" style={{ color: "red" }} />
//         </div>

//         <div>
//           <label>Avatar URL:</label>
//           <Field
//             type="text"
//             name="avatarUrl"
//             placeholder="Cloudinary Image URL"
//           />
//           {errors.avatarUrl && (
//             <div style={{ color: "red" }}>{errors.avatarUrl}</div>
//           )}
//           <ErrorMessage
//             name="avatarUrl"
//             component="div"
//             style={{ color: "red" }}
//           />
//         </div>

//         <button type="submit">Generate Ticket</button>
//       </Form>
//     )}
//   </Formik>
// );

// RegistrationForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// export default RegistrationForm;
