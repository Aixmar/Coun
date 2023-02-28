import './App.css';
import { Landing, Home, Form, Detail,Nav } from './components/index';

import {  Route, Switch, useLocation  } from "react-router-dom";



//  const ITEMS_PER_PAGE = 10;

function App() {


    // const [countries, setCountries] = useState([]);
    const location = useLocation();



  return (
    <div className="App">
      {
        location.pathname !== "/" && <Nav /> 
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
