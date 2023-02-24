import './App.css';
import { Landing, Home, Form, Detail,Nav, Pagination } from './components/index';

import {  Route, Switch, useLocation  } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';


//  const ITEMS_PER_PAGE = 10;

function App() {

  // const nextHandler = () => {
  //   console.log("next");
  // }

  // const prevHandler = () => {
  //   console.log("next");
  // }

    const onSearch =  (country) => {
      axios.get(`http://localhost:3001/countries/${country}`
       ).then((response) => 
         setCountries(oldCountries=> [...oldCountries, response.data])
      );
    };
  //Definida en App porque sino SearchBar no tiene cómo decirle a App que se modificó el estado countries (que es de App).
  //SearchBar le avisa que se modificó algo y se va pasando hasta App.

    const [countries, setCountries] = useState([]);
    const location = useLocation();



  return (
    <div className="App">
      {
        location.pathname !== "/" && <Nav onSearch={onSearch}/> 
      }
   
      <Switch>
                  
          <Route exact path="/" component={Landing}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/create" component={Form}/>
          <Route exact path="/detail/:id" component={Detail}/> 

      </Switch>

    </div>
  );
}

export default App;
