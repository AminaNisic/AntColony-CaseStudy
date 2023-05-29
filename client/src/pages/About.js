import React from 'react';
import '../App.css';
import { useHistory } from 'react-router-dom';



const About = () => {

    const history = useHistory();

    const handleFeaturesClick = () => {
        history.push('/features');
      };


  return (
    <div className="about-container">
        <div className="about-banner">
            <div className="about-text-section"> 
                <p className="about-subheading">
                    ABOUT US:
                </p>
                <h1 className="about-heading">
                    We are PIPELINER!
                </h1>
                <p className="about-text">
                    We are women in STEM.
                    <br />
                    And we want to make pipes fun!
                    <br />
                    Learn more about us and our features.
                </p>
                <button className="more-button" onClick={handleFeaturesClick}>
                    Find out more
                </button>
            </div>
        </div>
  

    </div>
  )
}

export default About