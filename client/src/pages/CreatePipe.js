import React from 'react'

const CreatePipe = () => {
  return (
    <div className="create-pipe-container">
        <h2>Create Pipe</h2>
        <form className="create-pipe-form">
            <label>Pipe Name:</label>
            <input
            type="text"
            placeholder="Pipe Name"
            ></input>
            <label>Language:</label>
            <input
            type="text"
            placeholder="Language"
            ></input>
            <label> Action: </label>
            <input
            type="text"
            placeholder="Action"
            ></input>
            <label>State:</label>
            <input
            type="text"
            placeholder="State"
            ></input>
            <button className="create-pipe-button">
            ADD PIPE
          </button>
        </form>
    </div>
  )
}
export default CreatePipe