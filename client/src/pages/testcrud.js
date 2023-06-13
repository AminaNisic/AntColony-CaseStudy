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
  }).then((response) =>{
      setListOfProjects(response.data);
    })
  }, []);

  /*const delet = () => {
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
  };*/

  return (
    <div className="projectcontainer" >
      {listOfProjects.map((value,key) => {
        return <div className='projectcard' onClick = {() => {
          history.push(`/testpage/${value.id}`)
        }}> 
        <div className='title'> {value.projectName} </div>
        

        <div className='title'> {value.repoURL} </div>
        <div className='title'> {value.status} </div>
        <div className='title'> {value.createdAt} </div>
        <div className='title'> {value.updatedAt} </div>
        <h1>Project id: {value.id} </h1>
        .
        <button type="button" className="login-button" onClick={() => {
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
          DELETE NASTY
        </button>
        </div>
      })}
    </div>
  );

  }
export default Testcrud;