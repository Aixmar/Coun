import AllCards from "../AllCards/AllCards";
import style from "./Home.module.css";
import {useEffect}from 'react';
import { useDispatch } from "react-redux";
import {getCountries} from '../../redux/actions';

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
                  

          <AllCards />
        </div>
      
     
      </>
  )
}

export default Home; 
