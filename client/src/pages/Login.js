import React, { useState } from 'react'
import axios from "axios";

//To stop the backend/server from crashing, you must add a return statement before all res.json() calls. After googling, I learned that you are only supposed to call res.json() once per post request, but since this is an asynchronous function, it can call it more than once regardless of the if-else statements.

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        const data = { email: email, password: password };
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
            setEmail(event.target.value);
        }}/>
        <input type="password" onChange={(event) => {
            setPassword(event.target.value);
        }}/>

        <button onClick={login}>Log in</button>
    </div>
  )
}

export default Login
