import React from 'react';
import '../App.css';

function Options({ x, y, onClose, onEdit, onDelete, onRun }) {
  const handleOptionClick = (option) => {
    if (option === 'edit') {
      onEdit();
    } else if (option === 'delete') {
      onDelete();
    } else if (option === 'run') {
      onRun();
    }
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
    </div>
  );
}

export default Options;