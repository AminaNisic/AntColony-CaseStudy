import React from 'react'

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
        <div className="features-wrapper">
            <div className="features-top">
                <p className="features-subheading">
                    So what does Pipeliner do?
                </p>
                <h1 className="features-subheading2">
                    Everything that Jenkins does!
                </h1>
                <p className="features-text">
                    All features a Jenkins user would need are also found on our website.
                    <br />
                    Sign up now!
                </p>
            </div>
         <div className="features-bottom">
            {infoData.map((data) => (
                <div className="features-info">
                    <div className="info-boxes">
                        <img src={data.image} alt =""/>
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Features