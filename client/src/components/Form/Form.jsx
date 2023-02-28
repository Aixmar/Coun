import {React, useEffect, useState }from 'react';
import style from './Form.module.css';
import {useDispatch, useSelector} from 'react-redux';
import { getActivities, getCountries } from '../../redux/actions';
import axios from 'axios';

const Form = (props) => {

const dispatch = useDispatch();
  const countries = useSelector((state)=> state.countries);

//Creo state local de actividades nuevas que entran por input
  const [input, setInput] = useState({
    name:"",
    difficulty:"",
    duration:"",
    season:"",
    countries:[]
  });
  

  useEffect(()=> {
    dispatch(getCountries());
    dispatch(getActivities());
   }, [dispatch]);

  const [errors, setErrors] = useState({
    name:"",
    difficulty:"",
    duration:"",
    season:"",
    countries:[]
  });
  // console.log(errors);
  // console.log(input);
    
 
  //fn que se ejecuta cada vez que el usuario escribe en un input
  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    
    setInput({
      ...input,
      [property]: value
    }) 
  
    //validate se encarga de llenar el error (a traves de setErrors)
    validate({
      ...input,
      [property]: value
    });
   }
   console.log(input);
  
  const handleCheck = (event) => {
    if(event.target.checked) {
      setInput({
        ...input,
        season: event.target.value
      })
    }
  }

  const handleSelect = (idCountries) => {
    setInput({
      ...input,
      countries:[...input.countries, idCountries.target.value]
    })
  }

  const handleRadio = (event) => {
    if(event.target.value) {
      setInput({
        ...input,
        difficulty: event.target.value
      })
    }
  }

  const handleDelete = (element) => {
    setInput({
      ...input,
      countries: input.countries.filter(count => count !== element)
    })
  }
 
  const validate = (input) => {
    const newErrors = {};
  
    if(!input.name) {
     newErrors.name = "Name required";
    } else if( !/^[a-zA-Z\s]+$/.test(input.name)) newErrors.name = "Name could contain only letters and spaces";  
    
    
    if (!input.difficulty) newErrors.difficulty = "Difficulty required";

  
    if (!input.duration){
       newErrors.duration = "Duration required";
     } else if (input.duration < 0 || input.duration > 24){
       newErrors.duration = "Duration must be between 1 to 24 hours";
     }else if(!Number.isInteger(Number(input.duration))){
      newErrors.duration = "Duration must be an integer";
     }

    if(!input.season) return newErrors.season = "Season required";
  
    setErrors(newErrors);
  }


//Cuando el usuario apriete button Create Activity
  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const hasErrors = Object.values(errors).some((error) => error !== ""); // TIENE ERRORES? TRUE o FALSE
      console.log(hasErrors);
      if (!hasErrors) {
        await axios.post("http://localhost:3001/activities", input);
        alert("Activity created");
        event.target.reset();
      } else alert("Error in the form");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(input);
 



//     dispatch(postActivity(input))

//        setInput({
//          name: '',
//          difficulty: '',
//          duration: '',
//          season: '',
//          countries: []
//      })
//  }







   

  return (
    <>
    <h1>CREATE NEW ACTIVITY</h1>

   
    
      <form onSubmit={submitHandler}>
       
       <div>
        <label>Name:</label>
        <input 
            type="text" 
            name="name" 
            value={input.name}
            onChange={handleInputChange}
            placeholder="Activity name"
            />
            {errors.name && <span>{errors.name}</span>}
        </div>

        <div>
        Difficulty:
        <label> <input type="radio" name= "1" value="1" onChange={handleRadio}/> 1 </label>
        <label> <input type="radio" name= "2" value="2" onChange={handleRadio}/> 2 </label>
        <label> <input type="radio" name= "3" value="3" onChange={handleRadio}/> 3 </label>
        <label> <input type="radio" name= "4" value="4" onChange={handleRadio}/> 4 </label>
        <label> <input type="radio" name= "5" value="5" onChange={handleRadio}/> 5 </label>
        {errors.difficulty && <span>{errors.difficulty}</span>}
         </div>

        <div>
        <label>Duration:</label>
        <input 
            type="number" 
            name="duration" 
            value={input.duration}
            placeholder="Activity duration"
            onChange={handleInputChange}
        />
        {errors.duration && <span>{errors.duration}</span>}
        </div>

        <div>
          <label>Season:</label>
          <label> <input type="checkbox" name="winter" value="winter" onChange={(event) =>handleCheck(event)} /> Winter</label>
          <label> <input type="checkbox" name="spring" value="spring" onChange={(event) =>handleCheck(event)} /> Spring</label>
          <label> <input type="checkbox" name="summer"  value="summer" onChange={(event) =>handleCheck(event)} /> Summer</label>
          <label> <input type="checkbox" name="autumn"  value="autumn" onChange={(event) =>handleCheck(event)} /> Autumn</label>
          {errors.season && <span>{errors.season}</span>}
        </div>     
        
        <div>
          <label>Countries:</label>
          <select 
              name="idCountries" 
              // value={input.countries} 
              onChange={(event) => handleSelect (event)}
              // multiple={true}
              //lo pide React, hace que el cuadrado de búsqueda de países sea mas grande también.
          >
            {countries.map(count => (
              <option value={count.id} key={count.id} >{count.name}</option>
            ))}
          </select>
         

         </div>

              
         <button 
            type="submit"
            className={style.btn}
            >CREATE!</button>

      </form>
      {input.countries.map(element =>
        <div>
          <p>{element}</p>
          <button onClick={()=>handleDelete(element)}> x </button>
        </div> 
        )},
    </>
  )
 };


export default (Form);


//no utiliza el estado global, solamente lo modifica. mapStateToProps no lo uso.
//No usamos useEffect porque no quiero hacer algo cuando el componente se monta o actualiza, solo
//cuando apretamos un botón.