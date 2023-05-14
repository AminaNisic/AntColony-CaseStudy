import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../App.css';

function Home() {
  const [listOfPipelines, setListOfPipelines] = useState([]);
  const [isQueueOpen, setIsQueueOpen] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3001/dashboard", {
      headers: {
        accessToken: sessionStorage.getItem("accessToken")
      }
    }).then((response) => {
      setListOfPipelines(response.data);
    })
  }, [])

  const toggleQueue = () => {
    setIsQueueOpen(!isQueueOpen);
  }

  return (
    <div className="home-container">
      <div className="sidebar">
        <button className="sidebar-btn">New Item</button>
        <button className="sidebar-btn">Build History</button>
        <button className="sidebar-btn">Manage</button>
        <button className="sidebar-btn">People</button>
        <div className="queue-container">
          <div className="queue-header" onClick={toggleQueue}>
            <div className={`queue-header-top ${isQueueOpen ? "grey" : ""}`}>
              Build Queue 
            </div>
            <div className="queue-header-bottom">
              {isQueueOpen ? <i className="arrow up"></i> : <i className="arrow down"></i>}
            </div>
          </div>
          {isQueueOpen && (
            <div className="queue-content">
              <div className="queue-content-inner">
                No builds in queue.
              </div>
            </div>
          )}
        </div>
        <div className="status-container">
          <div className="status-header" onClick={toggleQueue}>
            <div className={`status-header-top ${isQueueOpen ? "grey" : ""}`}>
              Build Status 
            </div>
            <div className="status-header-bottom">
              {isQueueOpen ? <i className="arrow up"></i> : <i className="arrow down"></i>}
            </div>
          </div>
          {isQueueOpen && (
            <div className="status-content">
              <div className="status-content-inner">
                No builds running.
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="main-content">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Last Build</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {listOfPipelines.map((pipeline) => (
              <tr key={pipeline.id}>
                <td>{pipeline.name}</td>
                <td>{pipeline.status}</td>
                <td>{pipeline.last_build}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home;