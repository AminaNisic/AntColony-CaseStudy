import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import '../App.css';
import { useHistory } from 'react-router-dom';

function Testcrud() {

  const [listOfProjects, setListOfProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/projects/myProjects", {
      headers: {
          accessToken: localStorage.getItem("accessToken"),
      }
  }).then((response) =>{
      setListOfProjects(response.data);
    })
  }, []);


  return (
    <div className="projectcontainer">
      {listOfProjects.map((value,key) => {
        return <div className='projectcard'> 
        <div className='title'> {value.projectName} </div>
        <div className='title'> {value.repoURL} </div>
        <div className='title'> {value.status} </div>
        <div className='title'> {value.createdAt} </div>
        <div className='title'> {value.updatedAt} </div>
        <h1>Project id: {value.id} </h1>
        .
        </div>
      })}
    </div>
  );

  }
export default Testcrud;