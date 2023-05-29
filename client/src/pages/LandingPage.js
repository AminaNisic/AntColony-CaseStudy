import React from 'react';
import Stressed from "../assets/stressed.png"; 
import { useHistory } from 'react-router-dom';
import '../App.css';

const LandingPage = () => {

    const history = useHistory();

    const handleAboutClick = () => {
        history.push('/about');
      };

  return (
    <div className="landing-page-container">
        <div className="landing-page-banner">
            <div className="stressed-image">
                <img src ={Stressed} alt=""/>
            </div> 
            <div className="landing-page-text-section">
                <h1 className= "primary-heading" >
                    Sick of Jenkins?
                </h1>
                <p className = "primary-text">
                    Jenkins has a very ugly UI.
                    <br />
                    It is not even pretty.
                    <br />
                    We're here to change that!
                    <br/>
                    Manage pipes with aesthetics!
                </p>
                <button className="how-button" onClick={handleAboutClick}>
                    HOW?
                </button>
            </div>


        </div>
    </div>
    
  )
}

export default LandingPage