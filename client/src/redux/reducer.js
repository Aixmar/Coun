import { GET_COUNTRIES, COUNTRY_DETAIL, GET_COUNTRY_NAME, CREATE_ACTIVITY } from "./actiontypes";

const InitialState = {
    countries: [],
    countryDetail:{},
    activities:{}
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

        case GET_COUNTRY_NAME:
            return {
                ...state,
                countries: action.payload,
            }        

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