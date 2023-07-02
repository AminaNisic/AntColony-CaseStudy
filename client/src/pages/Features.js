import React from 'react'
import { Link } from 'react-router-dom';

const Features = () => {

    const infoData = [
        {
            title: "Manage Pipes",
            text: "Use our girly setup to manage your pipes, roze mi boje!",
        },
        {
            title: "Create Projects",
            text: "Create your project i spoji ih sa pipes idk",
        },
        {
            title: "Hate on Jenkins",
            text: "Only superior people use Pipeliner",
        }
    ];
    
return (
    <div className="features-container">
        <div className="features-top">
            <p className="features-heading1">
                So what does Pipeliner do?
            </p>
            <h1 className="features-heading2">
                Everything that Jenkins does!
            </h1>
            <p className="features-paragraph">
                All features a Jenkins user would need are also found on our website.
                <br />
                <Link to= "/register" >Sign up now!</Link>
            </p>
        </div>
        <div className="features-bottom">
            {infoData.map((data) => (
                <div className="features-info">
                    <img src={data.image} alt =""/>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Features