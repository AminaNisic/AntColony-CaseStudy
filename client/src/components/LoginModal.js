import React, { useState, useRef, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Login from './Login';
import Register from './Register';
import './loginmodal.css'; 

function LoginModal(props) {
  const [show, setShow] = useState(false);

  const [isLogin, setIsLogin] = useState(true);

  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalRef]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Login/Register
      </Button>

      <Modal show={show} onHide={handleClose} centered ref={modalRef}>
        <Modal.Header closeButton>
          <Modal.Title>{isLogin ? 'Login' : 'Register'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isLogin ? <Login handleClose={handleClose} /> : <Register handleClose={handleClose} />}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleToggle}>
            {isLogin ? 'Register' : 'Login'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginModal;