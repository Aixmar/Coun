
import React from "react";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";



export default function Nav() {
 

    return ( 
        <>
            <nav className={style.nav}>
        
            <ul className={style.contenedor}>
            <Link className={style.link} to="/home">HOME | HENRY COUNTRIES</Link>

            <Link className={style.link2} to="/create">Create Activities</Link>
            
               </ul>
            
            </nav>
         </>
    );
}


{/* <ul className={style.contenedor}>
<li> <Link className={style.link} to="/home">HOME | HENRY COUNTRIES</Link></li>

<li> <Link className={style.link2} to="/create">Create Activities</Link></li>

   </ul> */}