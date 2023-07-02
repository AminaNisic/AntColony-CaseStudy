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
            <img src ={Stressed} alt=""/>
            <div className="landing-page-text">
                <h1 className= "landing-page-heading" >
                    Sick of Jenkins?
                </h1>
                <p className = "landing-page-paragraph">
                    Jenkins has a very ugly UI.
                    <br/>
                    It is not even pretty.
                    <br/>
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