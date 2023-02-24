import React from 'react';
import {Link} from 'react-router-dom';

// import PlanetaGrande from '../../assets/PlanetaGrande.png'
import Earth from '../../assets/Earth.png';
import style from "./Landing.module.css";


const Landing = () => {
  return (
    <div className={style.container}>
       
          
          <h1>EXPLORE</h1>

          <h2>HENRY COUNTRIES</h2>
          <img src={Earth} alt="" width="100%"></img>
          
          <div className={style.buttonContainer}>
          <Link to="/home">
            <button>Home</button>
          </Link>
          </div>
          
           
          <p>In this page you can search the countries you want </p>
          


       
    </div>
  )
}

export default Landing;
