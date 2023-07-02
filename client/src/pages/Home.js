import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';

function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

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

  const handleRun = () => {
    const isSuccess = Math.random() < 0.6;

    if (isSuccess) {
      setPopupMessage('Success!');
    } else {
      setPopupMessage('Failure!');
    }

    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div className="home-container">
      {showPopup && <div className="popup">{popupMessage}</div>}
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
        <div className="home-frame">
          <h2 className="home-heading">Pipelines</h2>
          <ul className="pipeline-list">
            <li className="pipeline-item">Pipeline 1</li>
            <li className="pipeline-item">Pipeline 2</li>
          </ul>
        </div>
      </div>
      <div className="home-footer">
        <button className="home-button">MY PROJECTS</button>
        <button className="home-button">MY PIPELINES</button>
        <button className="home-button" onClick={handleAboutClick}>
          ABOUT PIPELINER
        </button>
      </div>
      <button className="run-button" onClick={handleRun}>
        RUN
      </button>
    </div>
  );
}

export default Home;