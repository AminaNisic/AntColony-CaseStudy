import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/HomePage';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';
 /* ovdje closeat register popup */
function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <Navbar handleShowModal={handleShowModal} />
      <Home />
      {showModal && <LoginModal handleCloseModal={handleCloseModal} />}
    </div>
  );
}

export default App;