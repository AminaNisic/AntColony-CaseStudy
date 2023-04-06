import React from 'react'
import {Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import axios from "axios";

function Login() {
const initialValues = {
    email: "",
    password: ""
}

const validationSchema = Yup.object().shape({
    email: Yup.string().required(),
    password: Yup.string().min(8).required()
  })


  return (
    <div>
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        <Form>
          <label>Email: </label>
          <ErrorMessage name="email" component="span"/>
          <Field id="inputDetails" name="email" placeholder="Your email"/>
          <label>Password: </label>
          <ErrorMessage name="password" component="span"/>
          <Field id="inputDetails" name="password" placeholder="Choose your password"/>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Login
