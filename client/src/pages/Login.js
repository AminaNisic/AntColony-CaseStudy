import React, { useState, useContext } from 'react';
import axios from 'axios';
import '../App.css';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../helpers/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthState } = useContext(AuthContext);

  let history = useHistory();

  const login = () => {
    const data = { email: email, password: password };
    axios.post('http://localhost:3001/auth/login', data).then((response) => {
      if (response.data.error) { 
        alert(response.data.error);
      } else { 
        localStorage.setItem("accessToken", response.data);
        setAuthState(true);
        history.push("/home");
      }
    });
  };

  return (
    <div className="login-container">
      <h2> Login </h2>
      <form className="login-form">
        <label>Email: </label>
        <input
          type="text"
          id="email-input"
          placeholder = "youremail@gmail.com"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <label>Password:</label>
        <input
          type="password"
          id="password-input"
          placeholder = "********"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button type="button" className="login-button" onClick={login}>
          LOGIN
        </button>
      </form>
      <p>Don't have an account? <a href="/register" className="register-link">Register now</a></p>
    </div>
  );
}

export default Login;