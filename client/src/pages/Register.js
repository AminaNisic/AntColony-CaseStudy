import React from 'react'
import {Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import axios from "axios";

function Register() {
  const initialValues = {
    username: '',
    email: '',
    password: ''
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(60).required(),
    email: Yup.string().required(),
    password: Yup.string().min(8).required()
  })

const onSubmit = (data) => {
  axios.post("http://localhost:3001/auth", data).then((response) => {
          console.log("inserted.");
        })
}

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form>
          <label>Username: </label>
          <ErrorMessage name="username" component="span"/>
          <Field id="inputDetails" name="username" placeholder="Pick a username"/>
          <label>Email: </label>
          <ErrorMessage name="email" component="span"/>
          <Field type="password" id="inputDetails" name="email" placeholder="Your email"/>
          <label>Password: </label>
          <ErrorMessage name="password" component="span"/>
          <Field id="inputDetails" name="password" placeholder="Choose your password"/>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Register
