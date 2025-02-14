import { useState } from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Line from "./Line";

const AttendeeDetails = ({
  step,
  prevStep,
  nextStep,
  formData,
  setFormData,
}) => {
  const [loading, setLoading] = useState(false);

  // Cloudinary Upload Function
  const uploadImage = async (file, setFieldValue) => {
    if (!file) return;
    setLoading(true); // ✅ Correct way to use setLoading inside the component

    const formDataCloudinary = new FormData();
    formDataCloudinary.append("file", file);
    formDataCloudinary.append("upload_preset", "ticket_upload");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dinziqoat/image/upload",
        {
          method: "POST",
          body: formDataCloudinary,
        }
      );

      const data = await response.json();
      if (data.secure_url) {
        setFieldValue("avatar", data.secure_url);
        setFormData((prev) => ({ ...prev, avatar: data.secure_url })); // ✅ Ensures avatar updates in global state
      } else {
        console.error("Image upload failed:", data);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setLoading(false); // ✅ Ensure loading state resets even if an error occurs
    }
  };

  return (
    <Formik
      initialValues={{
        avatar: formData.avatar || "", // ✅ Ensures it's never undefined
        fullName: formData.fullName || "",
        email: formData.email || "",
        specialRequest: formData.specialRequest || "",
      }}
      validationSchema={Yup.object({
        avatar: Yup.string().required("Please upload a profile picture"),
        fullName: Yup.string().required("Enter Full Name"),
        email: Yup.string()
          .email("Enter a valid email")
          .required("Email is required"),
      })}
      onSubmit={(values) => {
        setFormData((prev) => ({ ...prev, ...values }));
        nextStep();
      }}
    >
      {({ setFieldValue, values }) => (
        <Form className="profile-container">
          <div>
            <div className="step-container">
              <h2 className="step-title">Attendee Details</h2>
              <p className="step-num">Step {step}/3</p>
            </div>

            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="profile-container">
            <p className="profile-text">Upload Profile Photo</p>

            {/* Profile Picture Upload */}
            <div className="upload-box">
              <label className="upload-area">
                {loading ? (
                  <p className="uploading">Uploading...</p>
                ) : (
                  <img src="upload.svg" alt="upload" />
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) =>
                    uploadImage(event.target.files[0], setFieldValue)
                  }
                  hidden
                />
                {values.avatar ? (
                  <img
                    src={values.avatar}
                    alt="Avatar"
                    className="avatar-preview"
                  />
                ) : (
                  <p className="drag-text">Drag & Drop or Click to Upload</p>
                )}
              </label>
              <ErrorMessage
                name="avatar"
                component="span"
                className="error-message"
              />
            </div>
          </div>

          <Line />

          <div>
            <div className="form-group">
              {/* Full Name Input */}
              <label>Enter your name:</label>
              <Field className="form-input" type="text" name="fullName" />
              <ErrorMessage
                name="fullName"
                component="span"
                className="error-message"
              />
            </div>

            <div className="form-group">
              {/* Email Input */}
              <label>Enter your email*</label>

              <img className="input-icon" src="email.svg" alt="Email icon" />

              <Field
                type="email"
                name="email"
                className="form-input with-icon"
                placeholder="hello@avioflagos.io"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group">
              {/* Special Request */}
              <label>Special request?</label>
              <Field
                className="form-textarea"
                as="textarea"
                name="specialRequest"
                placeholder="Textarea"
              />
            </div>
          </div>
          {/* Navigation Buttons */}
          <div className="button-container">
            <button
              type="button"
              className="button button-secondary"
              onClick={prevStep}
            >
              Back
            </button>
            <button type="submit" className="button button-primary">
              Get My Free Ticket
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

AttendeeDetails.propTypes = {
  step: PropTypes.number.isRequired,
  prevStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default AttendeeDetails;
