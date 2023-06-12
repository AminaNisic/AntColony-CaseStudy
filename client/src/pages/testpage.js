import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import { useHistory, useParams } from 'react-router-dom';


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

    const editProject = (option) => {
      if (option === "projectName") {
        let newName = prompt("Enter new name for project: ");
        axios.put("http://localhost:3001/projects/editname", { 
          newName: newName, 
          id: id,
        }, 
        {
          headers: {
              accessToken: localStorage.getItem("accessToken"),
          }
      });
      } else if (option === "repoURL") {

      } else {

      }
    }

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
  </div>)
   
  

  }
export default Testpage;