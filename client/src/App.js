import './App.css';
import React from 'react'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import Home from './pages/Home';
import Register from './pages/Register';
import Login from "./pages/Login"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/register"> Register </Link>
        <Link to="/login"> Login </Link>
        <Link to="/"> Home </Link>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;