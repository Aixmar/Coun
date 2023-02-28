import Card from '../Card/Card';
import styles from './AllCards.module.css';



const AllCards = (props) => {
  //llega props countries que viene de Countries que ya esta filtrado y paginado.
    return (
     <>
        
         <div className={styles.contAllCards}>

          {
            props.countries?.map((country) => {
                return (
               
                  <Card
                    key={country.id}
                    id={country?.id}
                    name={country?.name}
                    flag={country?.flag}
                    continent={country?.continent}
                  />
               
              )
               
          })
        }
         </div>
         </>
     
  ) 
  
};


//Signo de pregunta para que si tarda no se me rompa.



export default AllCards;
