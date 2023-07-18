import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import { useHistory, useParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function ProjectPage() {
  let history = useHistory();
  let { id } = useParams();
  const [projectObject, setProjectObject] = useState({});
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3001/projects/myProjects/${id}`, {
      headers: {
        accessToken: localStorage.getItem('accessToken'),
      },
    }).then((response) => {
      setProjectObject(response.data);
    });
  }, []);

  const [listOfPipelines, setListOfPipelines] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/dashboard/${id}`, {
      headers: {
        accessToken: localStorage.getItem('accessToken'),
      },
    }).then((response) => {
      setListOfPipelines(response.data);
    });
  }, []);

  const editProject = (option) => {
    if (option === 'projectName') {
      let newname = prompt('Enter new name for project: ');
      axios.put('http://localhost:3001/projects/editname', {
        newname: newname,
        id: id,
      }, {
        headers: {
          accessToken: localStorage.getItem('accessToken'),
        },
      });

      setProjectObject({ ...projectObject, projectName: newname });
    } else if (option === 'repoURL') {
      let newurl = prompt('Enter new URL for repoURL: ');
      axios.put('http://localhost:3001/projects/editrepourl', {
        newurl: newurl,
        id: id,
      }, {
        headers: {
          accessToken: localStorage.getItem('accessToken'),
        },
      });

      setProjectObject({ ...projectObject, repoURL: newurl });
    } else if (option === 'status') {
      let newstatus = prompt('Enter new status: ');
      axios.put('http://localhost:3001/projects/editstatus', {
        newstatus: newstatus,
        id: id,
      }, {
        headers: {
          accessToken: localStorage.getItem('accessToken'),
        },
      });

      setProjectObject({ ...projectObject, status: newstatus });
    }
  };

  const initialValuesPN = {
    pipelineName: '',
    language: '',
    actions: '',
    stateOfPipeline: 'not started',
    ProjectId: id,
  };

  const validationSchemaPN = Yup.object().shape({
    pipelineName: Yup.string().required(),
    language: Yup.string().required(),
    actions: Yup.string().required(),
    stateOfPipeline: Yup.string().required(),
    ProjectId: Yup.number().required(),
  });

  const onSubmit = (data) => {
    axios.post('http://localhost:3001/dashboard/createPipeline', data, {
      headers: {
        accessToken: localStorage.getItem('accessToken'),
      },
    })
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          alert('Successfully created!');
        }
      });
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="project-edit">
      <div className="project-frame">
        <div className="edit-project-name">
          <span>Project Name:</span>
          <h1 style={{ display: 'inline' }} onClick={() => { editProject('projectName'); }}>{projectObject.projectName}</h1>
          <button className="edit-project-button" onClick={() => { editProject('projectName'); }}>EDIT</button>
        </div>
        <div className="edit-project-thing">
          <span>repoURL:</span>
          <span onClick={() => { editProject('repoURL'); }}>{projectObject.repoURL}</span>
          <button className="edit-project-button" onClick={() => { editProject('repoURL'); }}>EDIT</button>
        </div>
        <div className="edit-project-thing">
          <span>Status:</span>
          <span onClick={() => { editProject('status'); }}>{projectObject.status}</span>
          <button className="edit-project-button" onClick={() => { editProject('status'); }}>EDIT</button>
        </div>
        <div className="edit-project-thing">
          <span>Created At:</span>
          <span>{projectObject.createdAt}</span>
        </div>
        <div className="edit-project-thing">
          <span>Updated At:</span>
          <span>{projectObject.updatedAt}</span>
        </div>
      </div>

      <div className="pipelinecontainer">
        <h1 className ="pipeline-head">List of Pipelines:</h1>
        {listOfPipelines.map((value, key) => {
          return (
            <div className="pipelines-list" key={key}>
              <div className="pipelinecard"
              onClick={() => {
                history.push(`/pipepage/${value.id}`)
              }}>{value.pipelineName}</div>
            </div>
          );
        })}
      </div>

      <div className="create-pipe-project-container">
        <button className="add-pipelines" onClick={openPopup}>Add pipelines to this project?</button>
        {isPopupOpen && (
          <div className="popup-container">
            <div className="popup">
              <button className="close-button" onClick={closePopup}>Close</button>
              <div className="create-pipe-project-pipe-container">
                <h2>Create Pipe</h2>
                <Formik initialValues={initialValuesPN} onSubmit={onSubmit} validationSchema={validationSchemaPN}>
                  <Form className="create-pipe-project-form">
                    <label>Pipe Name:</label>
                    <Field id="pipelineName" name="pipelineName" placeholder="Pipe Name" />
                    <label>Language:</label>
                    <Field id="language" name="language" placeholder="Language" />
                    <label>Actions:</label>
                    <Field id="actions" name="actions" placeholder="Actions" />
                    <button type="submit" className="create-pipe-button">ADD PIPE</button>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectPage;