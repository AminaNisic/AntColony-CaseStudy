import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import '../App.css';
import { useHistory } from 'react-router-dom';

function ProjectsList() {
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

  const handleDeleteProject = (projectId) => {
    axios.delete(`http://localhost:3001/projects/${projectId}`, {
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      }
    }).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        alert("Deleted project with ID: " + projectId);
        setListOfProjects((prevProjects) =>
          prevProjects.filter((project) => project.id !== projectId)
        );
      }
    });
  };

  const confirmDeleteProject = (event, projectId) => {
    event.stopPropagation();
    const shouldDelete = window.confirm("Are you sure you want to delete this project?");
    if (shouldDelete) {
      handleDeleteProject(projectId);
    }
  };

  return (
    <div className="projectcontainer">
      {listOfProjects.map((value, key) => {
        return (
          <div className='projectcard' key={value.id} onClick={() => {
            history.push(`/projectpage/${value.id}`)
          }}>
            <div className='project-name'>{value.projectName} </div>
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
              onClick={(e) => confirmDeleteProject(e, value.id)}>
              Delete Project
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectsList;