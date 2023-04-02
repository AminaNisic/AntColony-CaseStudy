import React from 'react';

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // login things, mozes changeat na user i pw ako hoces
  }

  return (
    <div className="login-popup">
      <div className="login-popup-content">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;