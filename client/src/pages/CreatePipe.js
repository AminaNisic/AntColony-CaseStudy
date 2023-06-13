import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import '../App.css';

const CreatePipe = () => {

//setup form
const [options, setOptions] = useState([]);
const [selectedOption, setSelectedOption] = useState('');

/*useEffect(() => {
  // Simulating an API call to retrieve data from the database
  const fetchData = async () => {
    try {
      // Make the API call to fetch the data from the database
      const response = await fetch('API_ENDPOINT');
      const data = await response.json();
      // Assuming the response is an array of objects with `id` and `name` properties
      setOptions(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);*/
useEffect(() => {
  axios.get("http://localhost:3001/projects/myProjects", {
    headers: {
        accessToken: localStorage.getItem("accessToken"),
    }
}).then((response) =>{
  setOptions(response.data);
  })
}, []);

const handleOptionChange = (event) => {
  setSelectedOption(event.target.value);
};

const initialValuesPN = {
  pipelineName: '',
  language: '',
  actions: '',
  stateOfPipeline: 'not started',
  ProjectId: null,

};

const validationSchemaPN = Yup.object().shape({
  pipelineName: Yup.string().required(),
  language: Yup.string().required(),
  actions: Yup.string().required(),
  stateOfPipeline: Yup.string().required(),
  ProjectId: Yup.number().required()

});

const onSubmit = (data) => {
  data.ProjectId = selectedOption;
  axios.post('http://localhost:3001/dashboard/createPipeline', data, {
      headers: {
          accessToken: localStorage.getItem("accessToken"),
      }
  })
  .then((response) => {
    if (response.data.error) {
      alert(response.data.error);
    } else {
    alert("Successfully created!");
    }
  },
  );
};


  return (
    <div className="create-pipe-container">
        <h2>Create Pipe</h2>
        <Formik initialValues={initialValuesPN} onSubmit={onSubmit} validationSchema={validationSchemaPN}>
        <Form className="create-pipe-form">

            <label>Pipe Name:</label>
            <Field id="pipelineName" name="pipelineName" placeholder="Pipe Name"/>
          

            <label>Language:</label>
            <Field id="language" name="language" placeholder="Language"/>
            

            <label> Actions: </label>
            <Field id="actions" name="actions" placeholder="Actions"/>


           
          <Field as="select" name="selectedOption" >
            <option value="">Select a project</option >
            {options.map((option) => (
              <option key={option.id} value={option.id} >
                {option.projectName}
              </option>
            ))}
          </Field>
       
        <p>Selected Option: {selectedOption}</p>
            <button type="submit" className="create-pipe-button">
            ADD PIPE
          </button>
        </Form>
        </Formik>
    </div>
  )
}
export default CreatePipe