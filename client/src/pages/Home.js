import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

function Home() {
  const [listOfPipelines, setListOfPipelines] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/dashboard/myPipelines", {
      headers: {
          accessToken: localStorage.getItem("accessToken"),
      }
  }).then((response) =>{
      setListOfPipelines(response.data);
    })
  }, []);

  const history = useHistory();

  const handleCreatePipeClick = () => {
    history.push('/createpipe');
  };

  const handleCreateProjectClick = () => {
    history.push('/createproject');
  };

  const handleAboutClick = () => {
    history.push('/about');
  };

  const handleProjectsListClick = () => {
    history.push('/projectslist');
  };

  const handlePipelinesClick = () => {
    history.push('/pipelines');
  };

  return (
    <div className="home-container">
      <div className="home-sidebar">
        <div className="home-frame">
          <h2 className="home-heading">Projects</h2>
          <p className="home-paragraph">Want to try making a new project? We're here to help!</p>
          <button className="home-button" onClick={handleCreateProjectClick}>
            CREATE PROJECT
          </button>
        </div>
        <div className="home-frame">
          <h2 className="home-heading">Pipes</h2>
          <p className="home-paragraph">Need a pipe? Create one and assign it to an existing project!</p>
          <button className="home-button" onClick={handleCreatePipeClick}>
            CREATE PIPE
          </button>
        </div>
      </div>
      <div className="home-pipelines">
        <div className="home-pipe-frame">
          <h2 className="home-heading">Pipelines</h2>
          <ul className="pipeline-list" > 
            {listOfPipelines.map ((value, key) => {
            return (<li className='pipeline-item'onClick={() => {
              history.push(`/pipepage/${value.id}`)
            }}> {value.pipelineName} </li>)
            })}
          </ul>
        </div>
      </div>
      <div className="home-footer">
        <button className="home-button" onClick={handleProjectsListClick}>MY PROJECTS</button>
        <button className="home-button" onClick={handlePipelinesClick}>MY PIPELINES</button>
        <button className="home-button" onClick={handleAboutClick}>ABOUT PIPELINER</button>
      </div>
    </div>
  );
}

export default Home;