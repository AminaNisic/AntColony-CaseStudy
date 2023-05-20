import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

function Home() {
  const [listOfPipelines, setListOfPipelines] = useState([]);
  const [isQueueOpen, setIsQueueOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);

  const toggleQueue = () => {
    setIsQueueOpen(!isQueueOpen);
  };

  const toggleStatus = () => {
    setIsStatusOpen(!isStatusOpen);
  };

//for middleware, an example
  /*useEffect(() => {
    axios
      .get('http://localhost:3001/dashboard', {
        headers: {
          accessToken: sessionStorage.getItem('accessToken'),
        },
      })
      .then((response) => {
        if(response.data.error){
          alert("You are not logged in! Log in to proceed with this");
        } else {
        setListOfPipelines(response.data);
        }
      });
  }, []);*/

  return (
    <div className="home-container">
      <div className="sidebar">
        <button className="sidebar-btn">New Item</button>
        <button className="sidebar-btn">Build History</button>
        <button className="sidebar-btn">Manage</button>
        <button className="sidebar-btn">Me</button>
        <div className="queue-container">
          <div className="queue-header" onClick={toggleQueue}>
            <div className={`queue-header-top ${isQueueOpen ? 'grey' : ''}`}>Build Queue</div>
            <div className="queue-header-bottom">
              {isQueueOpen ? <i className="arrow up"></i> : <i className="arrow down"></i>}
            </div>
          </div>
          {isQueueOpen && (
            <div className="queue-content">
              <div className="queue-content-inner">No builds in queue.</div>
            </div>
          )}
        </div>
        <div className="status-container">
          <div className="status-header" onClick={toggleStatus}>
            <div className={`status-header-top ${isStatusOpen ? 'grey' : ''}`}>Build Status</div>
            <div className="status-header-bottom">
              {isStatusOpen ? <i className="arrow up"></i> : <i className="arrow down"></i>}
            </div>
          </div>
          {isStatusOpen && (
            <div className="status-content">
              <div className="status-content-inner">No builds running.</div>
            </div>
          )}
        </div>
        <div className="console-container">
          <div className="console-header">Script Console</div>
          <div className="console-input">
            <textarea rows="10" cols="50"></textarea>
          </div>
          <button className="run-script-btn">
            Run Script
          </button>
        </div>
      </div>
      <div className="main-content">
        <table className="pipeline-table">
        <caption>
          <button className="add-pipeline-btn" title="Add pipeline">
            +
          <i className="plus-icon"></i>
          </button>
          <button className="delete-pipeline-btn" title="Delete pipeline">
             -
          <i className="minus-icon"></i>
          </button>
        </caption>
          <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Last build</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tr>
          <td>Pipe 1</td>
          <td>NE RADI</td>
          <td>29.4.2014.</td>
          <td>idk</td>
          </tr>
          <tr>
          <td>Pipe 2</td>
            <td>NE RADI</td>
            <td>29.4.2014.</td>
            <td>idk</td>
          </tr>
          <tr>
            <td>Pipe 3</td>
            <td>NE RADI</td>
            <td>29.4.2014.</td>
            <td>idk</td>
          </tr>
          <tr>
            <td>Pipe 4</td>
            <td>NE RADI</td>
            <td>29.4.2014.</td>
            <td>idk</td>
          </tr>
        </table>
      <div class="plus-sign">
  <span></span>
</div>
</div>
</div>
);
}
export default Home;