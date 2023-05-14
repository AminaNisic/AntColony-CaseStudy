import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import '../App.css';

function Register() {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(60).required(),
    email: Yup.string().required(),
    password: Yup.string().min(8).required(),
  });

  const onSubmit = (data) => {
    axios.post('http://localhost:3001/auth', data).then((response) => {
      console.log('inserted.');
    });
  };

  return (
    <div className="register-container">
      <h1>Please register</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form className="register-form">
          <label htmlFor="username">Username</label>
          <Field id="username" name="username" />
          <ErrorMessage name="username" component="span" />
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" />
          <ErrorMessage name="email" component="span" />
          <label htmlFor="password">Password</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" component="span" />
          <button type="submit">REGISTER</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Register;