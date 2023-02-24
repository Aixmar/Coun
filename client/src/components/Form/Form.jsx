import {React, useState }from 'react';
import style from './Form.module.css';
import {connect} from 'react-redux';
import { createActivity } from '../../redux/actions';
import axios from 'axios';



const Form = (props) => {

//Creo state local de actividades nuevas que entran por input
  const [input, setInput] = useState({
    name:"",
    difficulty:"",
    duration:"",
    season:"",
  });

  const [errors, setErrors] = useState({
    name:"",
    difficulty:"",
    duration:"",
    season:"",
  });
    
 

  // const [errors, setErrors] = useState(false);
  //inicia como false porque cuando carga el form no hay errores.


  //fn que se ejecuta cada vez que el usuario escribe en un input
  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    validate({...input,[property]: value})
    //el mismo estado que estoy a punto de setear, se lo paso a validate,
    //para que no me afecte lo poquito que demora. 

    setInput({...input,[property]: value}) 
  }
    // })
    // setErrors(validate({
    //   ...input,
    //   [property]: value
    // }));
     //}

     //creo fn validadora

function validate (input) {
  // let errors = {};
    if(input.name) {
      setErrors({...errors, name:""})
    } else {
      setErrors({...errors, name:"Name is required"})
    }
   
  }
    
    
//     if(!input.difficulty) {
//       errors.difficulty = "Difficulty is required";
//     }
//   return errors;
// };



//Cuando el usuario apriete button Create Activity
  const submitHandler = (event) => {
    event.preventDefault(); //para que no se mande solo porque el submit si recarga solo
    
    axios.post("http://localhost:3001/activities", input)
    .then(res => alert(res))
  }
   


    
  
 

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

        <label>Difficulty:</label>
        <input
            type="number" 
            name= "difficulty"
            value={input.difficulty}
            placeholder="Activity difficulty"
            min="1"
            max="5"
            onChange={handleInputChange}
         />

        <label>Duration:</label>
        <input 
            type="time" 
            name="duration" 
            value={input.duration}
            placeholder="Activity duration"
            onChange={handleInputChange}
        />

        <label>Season:</label>
              <select
               name="season"
               value={input.season}
               onChange={handleInputChange}
              > 
                  <option value="winter">Winter</option>
                  <option value="spring">Spring</option>
                  <option value="summer">Summer</option>
                  <option value="autumn">Autumn</option>
              </select>
              
         <button 
            type="submit"
            className={style.btn}
            >CREATE!</button>

      </form>
    </>
  )
}


// const mapDispatchToProps = (dispatch) => {
//   return {
//     createActivity:(input) => dispatch(createActivity(input))
//   }
// }

export default (Form);
//export default connect(null, mapDispatchToProps)(Form);

//no utiliza el estado global, solamente lo modifica. mapStateToProps no lo uso.
//No usamos useEffect porque no quiero hacer algo cuando el componente se monta o actualiza, solo
//cuando apretamos un botón.