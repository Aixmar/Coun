
import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";



export default function Nav({onSearch}) {
 

    return ( 
        <>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/create">Create Activities</Link></li>
            <nav className={style.nav}>
        
            <SearchBar onSearch={onSearch}/>
            </nav>
            </ul>
         </>
    );
}


