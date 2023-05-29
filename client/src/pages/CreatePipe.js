import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import '../App.css';

const CreatePipe = () => {

//setup form

const initialValuesPN = {
  pipelineName: '',
  language: '',
  actions: '',
  stateOfPipeline: 'not started',
  ProjectId: null,

};

const validationSchemaPN = Yup.object().shape({
  pipelineName: Yup.string().required(),
  language: Yup.string().required(),
  actions: Yup.string().required(),
  stateOfPipeline: Yup.string().required(),
  ProjectId: Yup.number().required()

});

const onSubmit = (data) => {
  axios.post('http://localhost:3001/dashboard/createPipeline', data, {
      headers: {
          accessToken: localStorage.getItem("accessToken"),
      }
  })
  .then((response) => {
    if (response.data.error) {
      alert(response.data.error);
    } else {
    alert("Successfully created!");
    }
  },
  );
};


  return (
    <div className="create-pipe-container">
        <h2>Create Pipe</h2>
        <Formik initialValues={initialValuesPN} onSubmit={onSubmit} validationSchema={validationSchemaPN}>
        <Form className="create-pipe-form">

            <label>Pipe Name:</label>
            <Field id="pipelineName" name="pipelineName" placeholder="Pipe Name"/>
          

            <label>Language:</label>
            <Field id="language" name="language" placeholder="Language"/>
            

            <label> Actions: </label>
            <Field id="actions" name="actions" placeholder="Actions"/>


            <label>Project id:</label>
            <Field id="ProjectId" name="ProjectId" placeholder="Project Name"/>

            <button type="submit" className="create-pipe-button">
            ADD PIPE
          </button>
        </Form>
        </Formik>
    </div>
  )
}
export default CreatePipe