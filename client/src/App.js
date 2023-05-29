import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import testcrud from './pages/testcrud';
import ProjectsList from './pages/ProjectsList';
import Navbar from './pages/Navbar';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Features from './pages/Features';
import CreatePipe from './pages/CreatePipe';
import CreateProject from './pages/CreateProject';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/createpipe" exact component={CreatePipe}/>
          <Route path="/createproject" exact component={CreateProject}/>
          <Route path="/features" exact component={Features}/>
          <Route path="/about" exact component={About} />
          <Route path="/home" exact component={Home} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/testcrud" exact component={testcrud} />
          <Route path="/projectslist" exact component={ProjectsList} />
          <Route component={LandingPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;