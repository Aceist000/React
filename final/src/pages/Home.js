import React from 'react';
import '../App.css';
import {
    Link,
  } from "react-router-dom";

function Home()
{
    return(
        <div className='app-container'>
            <img src={require('../Img/earth.jpg')} alt='girl' className='bigImage'/>
            <div className="hero-text">
                <h1>სანდრო მქვია მე</h1>
                <p>მიდი და</p>
                <Link to='/about'>
                <button class="button">დამიქირავე</button>
                </Link>
            </div>
        </div>
        
    )
}

export default Home;