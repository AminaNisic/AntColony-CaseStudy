import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        const data = { username: username, password: password };
        console.log(data);
        axios
          .post("http://localhost:3001/auth/login", data)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      };

  return (
    <div>
        <input type="text" onChange={(event) => {
            setUsername(event.target.value);
        }}/>
        <input type="password" onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button type="button" onClick={login}>
          LOGIN
        </button>
      </form>
    </div>
  );
}3
3


export default Login;