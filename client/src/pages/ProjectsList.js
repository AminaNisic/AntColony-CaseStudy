import React, { useState } from 'react';
import '../App.css';

const ProjectsList = () => {
  const projects = [
    {
      id: 1,
      name: 'Project 1',
      repoUrl: 'https://github.com/project1',
      pipelineCount: 3,
      status: 'Active',
    },
    {
      id: 2,
      name: 'Project 2',
      repoUrl: 'https://github.com/project2',
      pipelineCount: 5,
      status: 'Inactive',
    },
  ];

  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleEdit = (projectId) => {
    setSelectedProjectId(projectId);
    console.log(`Edit project with ID: ${projectId}`);
  };

  const handleDelete = (projectId) => {
    setSelectedProjectId(projectId);
    console.log(`Delete project with ID: ${projectId}`);
  };

  const handleOptionClose = () => {
    setSelectedProjectId(null);
  };

  return (
    <div>
      <table className="projects-list-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Repo URL</th>
            <th>Pipeline Count</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td
                className="project-name"
                onClick={() => handleEdit(project.id)}
              >
                {project.name}
              </td>
              <td>{project.repoUrl}</td>
              <td>{project.pipelineCount}</td>
              <td>{project.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ textAlign: 'right', margin: '30px' }}>
        <button type="add-project">Add Project</button>
      </div>
 

      {selectedProjectId && (
        <div
          className="options-menu"
          style={{ position: 'fixed', top: '100px', left: '100px' }}
        >
          <ul>
            <li>Edit Project {selectedProjectId}</li>
            <li>Delete Project {selectedProjectId}</li>
          </ul>
          <button onClick={handleOptionClose}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ProjectsList;