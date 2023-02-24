import axios from "axios";
import { GET_COUNTRIES, COUNTRY_DETAIL, GET_COUNTRY_NAME, CREATE_ACTIVITY, FILTER_BY_NAME } from "./actiontypes";


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

    export const getCountryName = (name) => {
        return async function(dispatch) {
            try {
                const apiData = await axios.get("http://localhost:3001/countries?name="+ name);
                
                dispatch({type: GET_COUNTRY_NAME, payload : apiData.data});
                
            } catch (error) {
                console.log(error);                
            }
        }
    };

    export const createActivity = (activity) => {
        return {type: CREATE_ACTIVITY, payload: activity}
    };

    export const filterByName = () => {
        return {type: FILTER_BY_NAME}
    };

    //no interactúa con la Api, de acá directamente le manda la action al reducer.