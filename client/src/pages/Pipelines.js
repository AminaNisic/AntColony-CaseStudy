import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import { useHistory } from 'react-router-dom';

function Pipelines() {
  let history = useHistory();

  const [listOfProjects, setListOfProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/dashboard/myPipelines", {
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
            history.push(`/pipepage/${value.id}`)
          }}>
            <div className='project-name'> {value.pipelineName} </div>
            <div className='title'>
            <span>actions:</span> {value.actions}
          </div>
          <div className='title'>
            <span>state of pipeline: </span> {value.stateOfPipeline}
          </div>
          <div className='title'>
            <span>Created at:</span> {value.createdAt}
          </div>
          <div className='title'>
            <span>Updated at:</span> {value.updatedAt}
          </div>
         
            <button
              type="button"
              className="delete-project-button"
              onClick={() => {
                axios.delete(`http://localhost:3001/dashboard/${value.id}`, {
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
              Delete Pipeline
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Pipelines;