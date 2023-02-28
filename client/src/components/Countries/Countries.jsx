import Filters from '../Filter/Filters'
import Pagination from '../Pagination/Pagination'
import { useSelector} from 'react-redux'
import SearchBar from "../SearchBar/SearchBar";

const Countries = () => {

    const countries = useSelector((state)=> state.countries);

    //pongo al componente Countries a escuchar los cambios de input de los filtros.
    const orderCountriesInput = useSelector((state)=> state.orderCountriesInput);
    const populationInput = useSelector((state)=> state.populationInput);
    const continentInput = useSelector((state)=> state.continentInput);

    let countriesFiltered = countries.filter((country) => {
      if (!continentInput) {
        return true;
      } else {
        return country.continent === continentInput;
      }
    });

    if(orderCountriesInput === "asc") {
      countriesFiltered.sort((a, b) => {
                if (a.name < b.name) {
                    return -1;
                  }
                  if (a.name > b.name) {
                    return 1;
                  }
                  return 0;
    }) }
    if(orderCountriesInput === "des"){
      countriesFiltered.sort((a, b) => {
                  if (b.name < a.name) {
                    return -1;
                  }
                  if (b.name > a.name) {
                    return 1;
                  }
                  return 0;    
     });
    };

    if(populationInput === "des") {
      countriesFiltered.sort((a, b) => a.population - b.population)}

     if(populationInput === "asc") {
       countriesFiltered.sort((a, b) =>b.population - a.population)}
 
 return (
    <div>
      <SearchBar />
      <Filters />
      <Pagination
             countriesFiltered={countriesFiltered}          
             />
      
    
     
    </div>
  )
}

export default Countries
