import React from 'react'

const CreateProject = () => {
  return (
    <div className="create-project-container">
        <h2>Create Project</h2>
        <form className="create-project-form">
            <label>Project Name:</label>
            <input
            type="text"
            placeholder="Project Name"
            ></input>
            <label>Repo URL:</label>
            <input
            type="text"
            placeholder="https://github.com/yourproject"
            ></input>
            <label> Pipeline Count: </label>
            <input
            type="text"
            placeholder="1, 2, 3..."
            ></input>
            <label>Status:</label>
            <input
            type="text"
            placeholder="Active/Inactive"
            ></input>
            <button className="create-project-button">
            ADD PROJECT
          </button>
        </form>
    </div>
  )
}

export default CreateProject