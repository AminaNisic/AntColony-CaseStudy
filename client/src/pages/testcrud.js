import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import '../App.css';
import { useHistory } from 'react-router-dom';

function testcrud(){

    //setup form

    const initialValuesPN = {
        projectName: '',
        repoURL: '',
        status: '',
      };

    const validationSchemaPN = Yup.object().shape({
        projectName: Yup.string().required(),
        repoURL: Yup.string().required(),
        status: Yup.string().required()
      });

      const onSubmit = (data) => {
        axios.post('http://localhost:3001/projects/createProject', data).then((response) => {
          alert("Successfully created!");
        });
      };

    //frontend
  return (
    <div className="login-container">
      <h1>this is a test</h1>

      <h1> create projects form </h1>
      <Formik initialValues={initialValuesPN} onSubmit={onSubmit} validationSchema={validationSchemaPN}>
        <Form className="register-form">
          <label> project name </label>
          <Field id="projectName" name="projectName" placeholder="Type project name"/>

          <label> Your github repo url </label>
          <Field id="repourl" name="repoURL" placeholder="Type github url of repo"/>

          <label> status </label>
          <Field id="status" name="status" placeholder="(Ex. in progress...)"/>


          <button type="submit">Create project</button>
        </Form>
      </Formik>
      
    </div>
  );

  }
export default testcrud;