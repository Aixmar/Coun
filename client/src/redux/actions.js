import axios from "axios";
import { FILTER_BY_NAME,  GET_COUNTRIES, COUNTRY_DETAIL, FILTER_INPUT_CONTINENT, ORDER_INPUT_COUNTRIES, ORDER_INPUT_POPULATION, GET_ACTIVITIES, FILTER_INPUT_ACTIVITY, CREATE_ACTIVITY} from "./actiontypes";



//defino a mis actions creators:

//ACTION QUE TRAIGA A TODOS LOS COUNTRIES:
export const getCountries = () => {
    return async function(dispatch) {
        try {
            const apiData = await axios.get("http://localhost:3001/countries");
            
            const countries = apiData.data;
            dispatch({type:GET_COUNTRIES, payload : countries});
        } catch (error) {
            console.log(error);
        }
     };
    };

    export const getCountryDetail = (id) => {
        return async function(dispatch) {
            try {
                const apiData = await axios.get(`http://localhost:3001/countries/${id}`);
                
                const country = apiData.data;
                dispatch({type: COUNTRY_DETAIL, payload : country});
            } catch (error) {
                console.log(error);
            }
        }
    };

// FILTRO SEARCHBAR     
    export const filterByName = (nameCountry) => {
        return async function(dispatch) {
            try {
                const apiData = await axios.get("http://localhost:3001/countries?name=" + nameCountry);
                
                return dispatch({
                    type: FILTER_BY_NAME,
                    payload : apiData.data
                })
                
            } catch (error) {
                console.log(error);                
            }
        }
    };

//Ordenar por nombre country
    export const orderInputCountries = (orderCountries) => {
        return {type: ORDER_INPUT_COUNTRIES, payload:orderCountries}
    };

 //Ordenar por population   
    export const orderInputPopulation = (orderPopulation) => {
        return {type: ORDER_INPUT_POPULATION, payload: orderPopulation}
    };

    //Filtrar por continente

    export const filterInputContinent = (filterContinent) => {
        return {type: FILTER_INPUT_CONTINENT, payload: filterContinent}
    };

    //Filtrar por activity
    export const filterInputActivity = (filterActivity) => {
        return {type: FILTER_INPUT_ACTIVITY, payload: filterActivity}
       };

    //Traer todas las activities
    export const getActivities = () => {
        return async function(dispatch) {
              try {
                  const apiData = await axios.get("http://localhost:3001/activities");
                  const allActivities = apiData.data;

            dispatch({type:GET_ACTIVITIES, payload : allActivities});
        } catch (error) {
            console.log(error);
        }
    }

    };

    export function postActivity(payload) {
        return async function (dispatch) {
            try {
                const apiData = await axios.post("http://localhost:3001/activities", payload);
                const newActivity = apiData.data;

                dispatch({type:CREATE_ACTIVITY, payload : newActivity});
            } catch (error) {
                console.log(error)
            }
        }
    }

    

    //Le paso el payload que me va a llegar

    //no interactúa con la Api, de acá directamente le manda la action al reducer.