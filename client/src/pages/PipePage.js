import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import { useHistory, useParams } from 'react-router-dom';

function PipePage() {

  let { pipelineid } = useParams();
  const [pipelineObject, setPipelineObject] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/dashboard/myPipelines/${pipelineid}`, {
      headers: {
          accessToken: localStorage.getItem("accessToken"),
      }
  }).then((response) =>{
      setPipelineObject(response.data);
    })
  }, []);

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

const handleRun = () => {
    const isSuccess = Math.random() < 0.6;

    if (isSuccess) {
      setPopupMessage('Success!');
      let successstatus = "Success";
      axios.put("http://localhost:3001/dashboard/runpipeline", { 
          successstatus: successstatus, 
          id: pipelineid,
        }, 
        {
          headers: {
              accessToken: localStorage.getItem("accessToken"),
          }
      });

      setPipelineObject({...pipelineObject, stateOfPipeline: successstatus});
    } else {
      setPopupMessage('Failure!');
      let successstatus = "Failure";
      axios.put("http://localhost:3001/dashboard/runpipeline", { 
          successstatus: successstatus, 
          id: pipelineid,
        }, 
        {
          headers: {
              accessToken: localStorage.getItem("accessToken"),
          }
      });

      setPipelineObject({...pipelineObject, stateOfPipeline: successstatus});
    }

    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };
  
    const editPipeline = (option) => {
      if (option === "pipelineName") {
        let newpipelineName = prompt("Enter new name for pipeline: ");
        axios.put("http://localhost:3001/dashboard/editName", { 
          newpipelineName: newpipelineName, 
          id: pipelineid,
        }, 
        {
          headers: {
              accessToken: localStorage.getItem("accessToken"),
          }
      });

      setPipelineObject({...pipelineObject, pipelineName: newpipelineName});

      } else if (option === "actions") {
        let newactions = prompt("Enter new actions for pipe: ");
        axios.put("http://localhost:3001/dashboard/editActions", { 
          newactions: newactions, 
          id: pipelineid,
        }, 
        {
          headers: {
              accessToken: localStorage.getItem("accessToken"),
          }
      });

      setPipelineObject({...pipelineObject, actions: newactions});

      } else {

      }
    }
    return (
      <div className="pipe-frame">
        <div className="edit-project-name">
          <span>Pipeline Name:</span>
          <h1
            style={{ display: 'inline' }}
            onClick={() => {
              editPipeline('pipelineName');
            }}
          >
            {pipelineObject.pipelineName}
          </h1>
          <button
            className="edit-project-button"
            onClick={() => {
              editPipeline('pipelineName');
            }}
          >
            EDIT
          </button>
        </div>
        <div className="edit-project-thing">
        <span>Actions:</span>
        <span
          onClick={() => {
            editPipeline('actions');
          }}
        >
          {pipelineObject.actions}
        </span>
        <button
          className="edit-project-button"
          onClick={() => {
            editPipeline('actions');
          }}
        >
          EDIT
        </button>
      </div>
      <div className="edit-project-thing">
        <span>Language:</span>
        <div>{pipelineObject.language}</div>
      </div>

      <div classname="pipe-project-thing">
        <div className="edit-project-pipe-thing">
      <span>State of Pipeline:</span>
      <div className="pipeline-state">{pipelineObject.stateOfPipeline}</div>
      </div>
        <button
          className="run-pipeline-button"
          onClick={() => {
            handleRun();
          }}
        >
          Run Pipeline
        </button>
        </div>
      </div>
    );
  }
  
  export default PipePage;