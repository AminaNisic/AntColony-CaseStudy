import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import testcrud from './pages/testcrud';
import testpage from './pages/testpage';
import ProjectsList from './pages/ProjectsList';
import Navbar from './pages/Navbar';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Features from './pages/Features';
import CreatePipe from './pages/CreatePipe';
import CreateProject from './pages/CreateProject';
import { AuthContext } from './helpers/AuthContext';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Testpage from './pages/testpage';
import PipePage from './pages/PipePage';
import Pipelines from './pages/Pipelines';

function App() {
  const [authState, setAuthState] = useState(false);
  
  useEffect(() => {
    axios.get('http://localhost:3001/auth/authenticate', { headers: {
      accessToken: localStorage.getItem("accessToken"),
    },   
  }).then((response) => {
      if(response.data.error){
        setAuthState(false);
      } else {
        setAuthState(true);
      }
    })
  }, []);


  return (
    <div className="App">
      <BrowserRouter>
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={LandingPage}/>
          <Route path="/createpipe" exact component={CreatePipe}/>
          <Route path="/createproject" exact component={CreateProject}/>
          <Route path="/features" exact component={Features}/>
          <Route path="/about" exact component={About} />
          <Route path="/home" exact component={Home} />
          <Route path="/testcrud" exact component={testcrud} />
          <Route path="/pipepage/:pipelineid" exact component={PipePage} />
          <Route path="/pipelines" exact component={Pipelines} />
          <Route path="/testpage/:id" exact component={testpage} />
          <Route path="/projectslist" exact component={ProjectsList} />   
          {!authState && (
          <>
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />   
          </>
            )}
  
        </Switch>
        </AuthContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;