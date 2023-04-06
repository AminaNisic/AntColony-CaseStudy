import './App.css';
import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './pages/Home';
import Register from './pages/Register';
import Login from "./pages/Login"
import Navbar from './pages/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;