import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
import thunkMiddleware from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//Esta línea sirve para conectarnos con la extensión del navegador => REDUX DEVTOOLS

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
  //Esta linea de arriba me sirve para poder hacer peticiones a la API.
);


export default store;
//La exporto porque en index le tengo que avisar a la app del store.

