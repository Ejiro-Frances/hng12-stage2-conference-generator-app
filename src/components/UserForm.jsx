import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { openDB } from "idb";
import ProfilePhoto from "../ProfilePhoto";

const UserForm = () => {
  const [db, setDb] = useState(null);

  useEffect(() => {
    const initDB = async () => {
      const dbInstance = await openDB("UserFormDB", 1, {
        upgrade(db) {
          if (!db.objectStoreNames.contains("userInputs")) {
            db.createObjectStore("userInputs", { keyPath: "id" });
          }
        },
      });
      setDb(dbInstance);
    };

    initDB();
  }, []);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    request: Yup.string().optional(),
  });

  const loadStoredData = async () => {
    if (db) {
      const tx = db.transaction("userInputs", "readonly");
      const store = tx.objectStore("userInputs");
      return await store.get("formData");
    }
    return null;
  };

  const saveToStorage = async (values) => {
    if (db) {
      const tx = db.transaction("userInputs", "readwrite");
      const store = tx.objectStore("userInputs");
      await store.put({ id: "formData", ...values });
    }
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", request: "" }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        await saveToStorage(values);
        alert("Form Submitted Successfully!");
      }}
      enableReinitialize
    >
      {({ errors, touched, setValues }) => {
        useEffect(() => {
          loadStoredData().then((data) => {
            if (data) setValues(data);
          });
        }, [db]);

        return (
          <Form className="form-container">
            <ProfilePhoto />
            <Line />
            <div className="form-group">
              <label>Enter your name</label>
              <Field type="text" name="name" className="form-input" />
              {errors.name && touched.name && (
                <span className="error-message">{errors.name}</span>
              )}
            </div>

            <div className="form-group">
              <label>Enter your email *</label>
              <div className="input-icon-wrapper">
                <span className="input-icon">✉️</span>
                <Field
                  type="email"
                  name="email"
                  className="form-input with-icon"
                  placeholder="hello@avioflagos.io"
                />
              </div>
              {errors.email && touched.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            <div className="form-group">
              <label>Special request?</label>
              <Field
                as="textarea"
                name="request"
                className="form-textarea"
                placeholder="Textarea"
              />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

const Line = () => {
  return <div className="line"></div>;
};

export default UserForm;
