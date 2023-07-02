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
        <div className="about-text"> 
            <p className="about-heading1">
                ABOUT US:
            </p>
            <h1 className="about-heading2">
                WE ARE PIPELINER!
            </h1>
            <p className="about-paragraph">
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
  )
}

export default About