import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import RegisterPage from './Register';
import LoginPage from './Login';
import './homepage.css';  /* u slucaju da npm install ne bude dovoljan, runaj ga u client directoryu ofc, manuelno sam install samo jos npm install react-bootstrap --save */
 /* button je spojen sa modal thingies ty stack overflow*/

 function HomePage() {

  const [showLoginModal, setShowLoginModal] = useState(false);

  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleLoginToggle = () => {
    setShowLoginModal(!showLoginModal);
  };

  const handleRegisterToggle = () => {
    setShowRegisterModal(!showRegisterModal);
  };

  const handleClose = () => {
    setShowLoginModal(false);
    setShowRegisterModal(false);
  };

  return (
    <div className="home-container">
      <h1>Welcome to HEJ HEJ!</h1>
      <p>Please log in or register to continue</p>
      <Button className="homepage-button" onClick={handleLoginToggle}>
        Log in
      </Button>
      <Button className="homepage-button" onClick={handleRegisterToggle}>
        Register
      </Button>

      <Modal show={showLoginModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Log in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginPage handleRegisterToggle={handleRegisterToggle} />
        </Modal.Body>
      </Modal>

      <Modal show={showRegisterModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RegisterPage handleLoginToggle={handleLoginToggle} />                
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default HomePage;