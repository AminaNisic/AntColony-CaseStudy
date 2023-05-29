import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import '../App.css';

function CreateProject (){

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
    axios.post('http://localhost:3001/projects/createProject', data, {
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
    <div className="create-project-container">
        <h2>Create Project</h2>
        <Formik initialValues={initialValuesPN} onSubmit={onSubmit} validationSchema={validationSchemaPN}>
        <Form className="create-project-form">
          
            <label>Project Name:</label>
            <Field id="projectName" name="projectName" placeholder="Project Name"/>


            <label>Repo URL:</label>
            <Field id="repourl" name="repoURL" placeholder="https://github.com/yourproject"/>
          
            
           
            <label>Status:</label>
            <Field id="status" name="status" placeholder="Active/Inactive"/>
            
          <button type="submit" className="create-project-button">ADD PROJECT</button>
        </Form>
        </Formik>
    </div>
  )
}

/*<label> Pipeline Count: </label>
<input
type="text"
placeholder="1, 2, 3..."
></input>*/

export default CreateProject;