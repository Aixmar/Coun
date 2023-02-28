import {FILTER_BY_NAME, GET_COUNTRIES, COUNTRY_DETAIL,  ORDER_INPUT_COUNTRIES, ORDER_INPUT_POPULATION, FILTER_INPUT_CONTINENT, FILTER_INPUT_ACTIVITY, GET_ACTIVITIES, CREATE_ACTIVITY  } from "./actiontypes";


const InitialState = {
    countries: [],
    countryDetail:{},

    //searchBar
    countrySearch:[],

    //Filtro actividades
    activities:[],
    activityInput: [],

    //Filtros
    filterCountries: [],

    //Inputs que ingresan por el filtro
    continentInput: "",
    populationInput:"",
    orderCountriesInput:"",
   
    //Pagination
    paginatedCountries:[],
}


const rootReducer = (state = InitialState, action ) => {
    switch (action.type) {

        case GET_COUNTRIES:
            return {
                ...state, 
                countries:action.payload,
            }
          
        case COUNTRY_DETAIL:
            return {
                ...state,
                 countryDetail: action.payload,
                }
// SEARCHBAR-----------
        case FILTER_BY_NAME:
            return {
                ...state,
                countries: action.payload,
            }   

// FILTRO POR CONTINENT -------
        case FILTER_INPUT_CONTINENT:
            return {
               ...state,
               continentInput: action.payload,
             };    

// ORDEN POR COUNTRY -------
        case ORDER_INPUT_COUNTRIES:
            return {
               ...state,
               orderCountriesInput: action.payload,
               populationInput:"",
             };    

// ORDEN POR POPULATION -------
        case ORDER_INPUT_POPULATION:
            return {
               ...state,
               populationInput: action.payload,
               orderCountriesInput:"",
             };    
                    
              

 // FILTER BY ACTIVIDAD -------

        case FILTER_INPUT_ACTIVITY:
            return {
            ...state,
            activityInput: action.payload,
            };   


  // OBTENER TODAS LAS ACTIVIDADES -------

        case GET_ACTIVITIES:
            return {
            ...state,
            activities: action.payload,
            };       
            
            
        case CREATE_ACTIVITY:
            return {
            ...state,
            activities: action.payload,
            };      

            
        default:
        return {...state};               




     }
};

export default rootReducer;