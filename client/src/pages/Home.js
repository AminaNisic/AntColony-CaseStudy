import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import Options from './Options';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function Home() {
  const [isQueueOpen, setIsQueueOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [optionsPosition, setOptionsPosition] = useState({ x: 0, y: 0 });
  const [selectedPipe, setSelectedPipe] = useState('');

  const toggleQueue = () => {
    setIsQueueOpen(!isQueueOpen);
  };

  const toggleStatus = () => {
    setIsStatusOpen(!isStatusOpen);
  } ;

  const history = useHistory();

  const handleAddPipeClick = () => {
      history.push('/createpipe');
    };
  

  const handleClick = (event) => {
    if (
      !event.target.classList.contains('options-menu') &&
      !event.target.classList.contains('pipe-name')
    ) {
      setShowOptions(false);
    }
  };
  
  const showContextMenu = (event, pipeName) => {
    event.preventDefault();
    const { clientX, clientY } = event;
    setSelectedPipe(pipeName);
    setOptionsPosition({ x: clientX, y: clientY });
    setShowOptions(true);
  };
  
  const handleEdit = () => {
    console.log(`Edit ${selectedPipe}`);
    setShowOptions(false);
  };

  const handleDelete = () => {
    console.log(`Delete ${selectedPipe}`);
    setShowOptions(false);
  };

  const handleRun = () => {
    console.log(`Run ${selectedPipe}`);
    setShowOptions(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
    document.removeEventListener('click', handleClick);
  };
}, []);

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
        <div className = "project-table-container"></div>
         <table className="project-table">
              <thead>
                <tr>
                  <th>Project Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> <Link to = "/projectslist">Project 1</Link></td>
                </tr>
                <tr>
                <td> <Link to = "/projectslist">Project 2</Link></td>
                </tr>
              </tbody>
            </table>
      </div>
      <div className="main-content">
        <button className="add-button" onClick={handleAddPipeClick} title="Add pipeline">+</button>
        <table className="pipeline-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Language</th>
              <th>Action</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="pipe-name" onClick={(event) => event.button === 0 && showContextMenu(event, 'Pipe 1')}>Pipe 1</td>
              <td>React</td>
              <td>Action</td>
              <td>Running</td>
            </tr>
            <tr>
              <td className="pipe-name" onClick={(event) => event.button === 0 && showContextMenu(event, 'Pipe 2')}>Pipe 2</td>
              <td>C</td>
              <td>Action</td>
              <td>Not running</td>
            </tr>
            <tr>
              <td className="pipe-name" onClick={(event) => event.button === 0 && showContextMenu(event, 'Pipe 3')}>Pipe 3</td>
              <td>Python</td>
              <td>Action</td>
              <td>Not running</td>
            </tr>
            <tr>
              <td className="pipe-name" onClick={(event) => event.button === 0 && showContextMenu(event, 'Pipe 4')}>Pipe 4</td>
              <td>Python</td>
              <td>Action</td>
              <td>Not running</td>
            </tr>
          </tbody>
        </table>
        {showOptions && (
          <Options
            x={optionsPosition.x}
            y={optionsPosition.y}
            onClose={() => setShowOptions(false)}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onRun={handleRun}
          />
        )}
      </div>
    </div>
  );
}

export default Home;