import style from "./Home.module.css";
import {useEffect}from 'react';
import { useDispatch } from "react-redux";
import {getCountries} from '../../redux/actions';


import Countries from "../Countries/Countries";

const Home = () => {

  

  const dispatch = useDispatch();

  //Se monta el componente y se despacha la accion
  useEffect(() => {
    dispatch(getCountries());
  },[dispatch])
  
  
  return (
   <>
       <div className={style.contHome}></div>
        
       <div className={style.content}>
              
        
          <Countries />
        </div>
      
     
      </>
  )
}

export default Home; 
