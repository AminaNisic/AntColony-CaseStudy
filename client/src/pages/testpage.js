import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import { useHistory, useParams } from 'react-router-dom';


function Testpage() {

    let { id } = useParams();
  
  return ( 
  <div >
    { id }
  </div>)
   
  

  }
export default Testpage;