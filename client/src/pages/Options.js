import React , { useState } from 'react';
import '../App.css';

function Options({ x, y, onClose, onEdit, onDelete, onRun }) {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');


  const handleOptionClick = (option) => {
    if (option === 'edit') {
      onEdit();
    } else if (option === 'delete') {
      onDelete();
    } else if (option === 'run') {
      onRun();
    }
  };

  const handleRun = () => {
    setPopupMessage('Success!');
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000); 
  };

  return (
    <div
      className="options-menu"
      style={{ position: 'fixed', top:`${y}px`, left: `${x}px` }}>

      <ul>
        <li onClick={() => handleOptionClick('edit')}>Edit</li>
        <li onClick={() => handleOptionClick('delete')}>Delete</li>
        <li onClick={() => handleOptionClick('run')}>Run</li>
      </ul>
      {showPopup && <div className="popup">{popupMessage}</div>}
    </div>
  );
}

export default Options;