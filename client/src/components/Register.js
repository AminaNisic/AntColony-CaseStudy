import React from 'react';

const RegisterPage = ({ handleToggle, handleLoginToggle }) => {
  return (
    <div className="login-popup-content">
      <h2>Register</h2>
      <form>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <br />
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>
        Already have an account?{' '}
        <button onClick={handleLoginToggle}>Log in</button>
      </p>
    </div>
  );
};

export default RegisterPage;