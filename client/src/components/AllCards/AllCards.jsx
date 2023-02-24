import {useSelector} from 'react-redux'
import Card from '../Card/Card';
import styles from './AllCards.module.css';

const AllCards = () => {

    
    const countries = useSelector((state)=> state.countries);
    //va a buscar la propiedad countries de mi objeto del estado global (state)

   return (

         <div className={styles.contAllCards}>
          {
            countries.map((country) => {
                return (
               
                  <Card
                    id={country?.id}
                    name={country?.name}
                    flag={country?.flag}
                    continent={country?.continent}
                  />
               
              )
               
          })
        }
         </div>
     
  ) 
  
};


//Signo de pregunta para que si tarda no se me rompa.



export default AllCards;
