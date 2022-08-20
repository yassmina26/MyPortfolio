import React, { useState } from "react";

import { Formik, Form, Field } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { init } from "@emailjs/browser";
import { Textarea } from "@chakra-ui/react";
import { GrFormClose } from "react-icons/gr";

init("a_37_l14GX76Wg8Th");

const ContactModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-container">
        <div className="modal-header">
          <h1>Contact Form</h1>
          <GrFormClose size={24} cursor="pointer" onClick={onClose} />
        </div>
        <Formik
          initialValues={{
            full_name: "",
            email: "",
            message: "",
          }}
          validationSchema={Yup.object({
            full_name: Yup.string().required("Name is required."),
            email: Yup.string().email().required("Email is required."),
            message: Yup.string().required("Message is required."),
          })}
          onSubmit={(values, { resetForm }) => {
            const templateParams = {
              name: values.full_name,
              email: values.email,
              message: values.message,
            };
            emailjs
              .send(
                "service_ina8qcg",
                "template_5n083cy",
                templateParams,
                "a_37_l14GX76Wg8Th"
              )
              .then(
                (result) => {
                  if (result.text == "OK") {
                    toast.success("We received your message", {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    });

                    resetForm();
                  }
                },
                (error) => {
                  console.log(error);
                  toast.error("Something wrong , please try again", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                }
              );
          }}
        >
          {({ values, errors, touched }) => (
            <Form>
              <div className="form-container">
                <Field
                  name="full_name"
                  type="text"
                  placeholder="Full name"
                  className="input"
                />
                {errors.full_name && touched.full_name && (
                  <p style={{ color: "red", fontSize: 14 }}>
                    {errors.full_name}
                  </p>
                )}
                <Field
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="input"
                />
                {errors.email && touched.email && (
                  <p style={{ color: "red", fontSize: 14 }}>{errors.email}</p>
                )}
                <Field
                  name="message"
                  as={Textarea}
                  placeholder="Message"
                  className="input"
                />
                {errors.message && touched.message && (
                  <p style={{ color: "red", fontSize: 14 }}>{errors.message}</p>
                )}
              </div>
              <button className="submit" type="submit">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
};

export default ContactModal;
