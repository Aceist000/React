import React from 'react';
import '../App.css';
import '../Visuals/MyProjects.css';
import {
    Link,
} from "react-router-dom";
function MyProjects()
{
    return(
        <div>
        <div class="row">
        <div class="column">
            <div class="card">
            <img src={require('../Img/Pokemon.jpg')} alt='girl' className='home-image'/>
            <div class="container">
                <h2>Pokemon Project</h2>
                <p class="title">Pokemons List</p>
                <p>MANY MANY POKEMONS</p>
                <Link to='/pokemon'>
                <p><button class="button">View Project</button></p>
                </Link>
            </div>
            </div>
        </div>

        <div class="column">
            <div class="card">
            <img src={require('../Img/Movie.jpg')} alt='girl' className='home-image'/>
            <div class="container">
                <h2>Movies Project</h2>
                <p class="title">Move Stats</p>
                <p>MANY MANY MOVIES</p>
                <Link to='/movies'>
                <p><button class="button">View Project</button></p>
                </Link>
            </div>
            </div>
        </div>
        
    
        </div>
        </div>
    )
}

export default MyProjects;