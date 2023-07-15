import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import '../App.css';

const CreatePipe = () => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [pipelineName, setPipelineName] = useState('');
  const [language, setLanguage] = useState('');
  const [actions, setActions] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/projects/myProjects', {
        headers: {
          accessToken: localStorage.getItem('accessToken'),
        },
      })
      .then((response) => {
        setOptions(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const initialValuesPN = {
    pipelineName: '',
    language: '',
    actions: '',
    stateOfPipeline: 'not started',
    ProjectId: '',
  };

  const validationSchemaPN = Yup.object().shape({
    pipelineName: Yup.string().required(),
    language: Yup.string().required(),
    actions: Yup.string().required(),
    stateOfPipeline: Yup.string().required(),
    ProjectId: Yup.number().required(),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dataToSend = {
        pipelineName,
        language,
        actions,
        stateOfPipeline: 'not started',
        ProjectId: selectedOption,
      };
      const response = await axios.post(
        'http://localhost:3001/dashboard/createPipeline',
        dataToSend,
        {
          headers: {
            accessToken: localStorage.getItem('accessToken'),
          },
        }
      );
      if (response.data.error) {
        alert(response.data.error);
      } else {
        alert('Successfully created!');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="create-pipe-container">
      <h2>Create Pipe</h2>
      <form className="create-pipe-form" onSubmit={handleSubmit}>
        <label>Pipe Name:</label>
        <input
          type="text"
          name="pipelineName"
          placeholder="Pipe Name"
          value={pipelineName}
          onChange={(e) => setPipelineName(e.target.value)}
        />

        <label>Language:</label>
        <input
          type="text"
          name="language"
          placeholder="Language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        />

        <label>Actions:</label>
        <input
          type="text"
          name="actions"
          placeholder="Actions"
          value={actions}
          onChange={(e) => setActions(e.target.value)}
        />

        <select name="ProjectId" onChange={handleOptionChange}>
          <option value="">Select a project</option>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.projectName}
            </option>
          ))}
        </select>

        <button type="submit" className="create-pipe-button">
          ADD PIPE
        </button>
      </form>
    </div>
  );
};

export default CreatePipe;
