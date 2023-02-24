//Componente Dumb

import React from 'react'
import { Link } from 'react-router-dom';
import style from './Card.module.css';

//tengo id para un link al detalle

const Card = ({id,flag, name, continent}) => {

  return (
    <div className={style.cardcontainer}>

        <div className={style.imgcontainer}>
          <Link to={`/detail/${id}`} > 
            <img src={flag} alt="" />
          </Link>
        </div> 

        <div className={style.country}>
          <label>Country:</label>
            <span>{name}</span>
        </div> 

        <div className={style.continent}>
        <label>Continent:</label>
        <span>{continent}</span>
        </div> 

    </div>
  )
}

export default Card;
