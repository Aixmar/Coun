import { useState } from "react";
import styles from './SearchBar.module.css';
import { getCountryName } from "../../redux/actions";
import { useDispatch } from "react-redux";


export default function SearchBar ({onSearch}) {
   
const dispatch = useDispatch();

//creamos un estado local
const [searchInput, setSearchInput] = useState("");


 
  //el estado se va a ir seteando cuando entrar nuevos inputs.

  const handleInputChange = (event) => {
    // event.preventDefault();
    dispatch(setSearchInput(searchInput));
    setSearchInput(searchInput);   
    };


    //función del botón
    const handleSubmit = (event) => {
      event.preventDefault();
      dispatch(getCountryName(searchInput))
    };
    

  return (
    <>
      <div className={styles.container}>
      <input 
        type="text"  
        value={searchInput}
        placeholder='Search country...' 
        onChange={(event)=> handleInputChange(event.target.value)} 
      />

      <button 
       type='submit'
       onSubmit={handleSubmit}
       >SEARCH</button> 

    </div>
    </>
  )
}
