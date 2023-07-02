import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import '../App.css';
import { useHistory } from 'react-router-dom';

function Testcrud() {
  let history = useHistory();

  const [listOfProjects, setListOfProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/projects/myProjects", {
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      }
    }).then((response) => {
      setListOfProjects(response.data);
    })
  }, []);

  return (
    <div className="projectcontainer">
      {listOfProjects.map((value, key) => {
        return (
          <div className='projectcard' onClick={() => {
            history.push(`/testpage/${value.id}`)
          }}>
            <div className='project-name'> {value.projectName} </div>
            <div className='title'>
            <span>repoURL:</span> {value.repoURL}
          </div>
          <div className='title'>
            <span>Status:</span> {value.status}
          </div>
          <div className='title'>
            <span>Created at:</span> {value.createdAt}
          </div>
          <div className='title'>
            <span>Updated at:</span> {value.updatedAt}
          </div>
          <div className='project-id'>
            <span>Project ID:</span> {value.id}
          </div>
            <button
              type="button"
              className="delete-project-button"
              onClick={() => {
                axios.delete(`http://localhost:3001/projects/${value.id}`, {
                  headers: {
                    accessToken: localStorage.getItem("accessToken"),
                  }
                }).then((response) => {
                  if (response.data.error) {
                    alert(response.data.error);
                  } else {
                    alert("deleted :(");
                  }
                });
              }}>
              Delete Project
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Testcrud;