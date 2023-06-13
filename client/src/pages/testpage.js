import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import { useHistory, useParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


function Testpage() {

    let { id } = useParams();
    const [projectObject, setProjectObject] = useState({});

    useEffect(() => {
      axios.get(`http://localhost:3001/projects/myProjects/${id}`, {
        headers: {
            accessToken: localStorage.getItem("accessToken"),
        }
    }).then((response) =>{
        setProjectObject(response.data);
      })
    }, []);

    const [listOfPipelines, setListOfPipelines] = useState([]);

    useEffect(() => {
      axios.get(`http://localhost:3001/dashboard/${id}`, {
        headers: {
            accessToken: localStorage.getItem("accessToken"),
        }
    }).then((response) =>{
        setListOfPipelines(response.data);
      })
    }, []);

    const editProject = (option) => {
      if (option === "projectName") {
        let newname = prompt("Enter new name for project: ");
        axios.put("http://localhost:3001/projects/editname", { 
          newname: newname, 
          id: id,
        }, 
        {
          headers: {
              accessToken: localStorage.getItem("accessToken"),
          }
      });

      setProjectObject({...projectObject, projectName: newname});
      } else if (option === "repoURL") {

      } else {

      }
    }

    const initialValuesPN = {
      pipelineName: '',
      language: '',
      actions: '',
      stateOfPipeline: 'not started',
      ProjectId: id,
    
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
  <div >
    project name:
    <h1 onClick = {() => {
      editProject("projectName");
    }}>{ projectObject.projectName}</h1> <button onClick = {() => {
      editProject("projectName");
    }}> edit </button>
    <div onClick = {() => {
      editProject("repoURL");
    }}>{ projectObject.repoURL } </div>
    <div onClick = {() => {
      editProject("status");
    }}>{ projectObject.status }</div>
    <div>{ projectObject.createdAt }</div>
    <div>{ projectObject.updatedAt }</div>

    list of pipelines:
    <div className="pipelinecontainer">
   {listOfPipelines.map ((value, key) => {
    return <div classname="pipelinecard">
      <div className='title'> {value.pipelineName} </div>
    </div>
   })}

  <h2>Add pipeline to this project?</h2>

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


            <button type="submit" className="create-pipe-button">
            ADD PIPE
          </button>
        </Form>
        </Formik>
    </div>
    </div>
  </div>)
   
  

  }
export default Testpage;