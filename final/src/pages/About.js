import React from 'react';
import '../App.css';
import '../Visuals/About.css';

function About()
{
    return(
        <div>
            <div className="about-section">
                <h1>About Me</h1>
                <p>My name is Sandro, I am Developer at Infinitum Game Development company</p>
                <p>Here you can see big picture, it should be me, but I dont take pictures</p>
                </div>

                    <div className="card">
                    <img src={require('../Img/Developer.jpg')} alt='love' className='about-image'/>
                    <div className="container">
                        <h2>Sandro Chkadua</h2>
                        <p className="title">Junior Developer</p>
                        <p>I am one of the best developers you'll ever meet, even tough I'm junior</p>
                        <p>sandro.chkadua.1@btu.edu.ge</p>
            </div>

        </div>
    </div>
    )
}

export default About;