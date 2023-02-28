import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterByName } from "../../redux/actions";
import styles from './SearchBar.module.css';


export default function SearchBar () {
   
  const [name, setName] = useState("");
const dispatch = useDispatch();



//creamos un estado local

  //el estado se va a ir seteando cuando entrar nuevos inputs.

  function handleSubmit (){
    setName(name);   
    dispatch(filterByName(name));
    };


  return (
   
      <div className={styles.container}>
      <input 
        type = 'text'
        // value={name}
        placeholder='Search country...' 
        onChange={(event)=> setName(event.target.value)} 
      />
      <button onClick={handleSubmit}>SEARCH</button> 

    </div>
  )
}
