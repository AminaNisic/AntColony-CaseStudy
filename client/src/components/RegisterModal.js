import React, { useState } from 'react';
import Modal from 'react-modal';
import './registermodal.css';

const RegisterModal = ({ handleToggle, handleClose }) => {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // do something with email, password, and username here
    handleClose();
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={handleClose}
      contentLabel="Register"
      className="register-popup"
      overlayClassName="register-popup-overlay"
    >
      <div className="register-popup-content">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <label>
            Username:
            <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
        <p>Already have an account? <button onClick={handleToggle}>Log in</button></p>
      </div>
    </Modal>
  );
};

export default RegisterModal;