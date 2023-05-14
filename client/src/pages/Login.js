import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    const data = { email: email, password: password };
    axios.post('http://localhost:3001/auth/login', data).then((response) => {
      if (response.data.error) { 
        alert(response.data.error);
      } else { 
        sessionStorage.setItem("accessToken", response.data);
      }
    });
  };

  return (
    <div className="login-container">
      <h1>Please login</h1>
      <form className="login-form">
        <label>Email: </label>
        <input
          type="text"
          id="email-input"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <label>Password:</label>
        <input
          type="password"
          id="password-input"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button type="button" onClick={login}>
          LOGIN
        </button>
      </form>
      <p>Don't have an account? <a href="/register">Register now.</a></p>
    </div>
  );
}

export default Login;