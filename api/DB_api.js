const axios = require("axios");
const {Country} = require("./src/db");



//PRIMERO TRAIGO DATA DE LA API
const getApiInfo = async () => {
    const apiCountries = await axios.get("https://restcountries.com/v3/all")
    
    //Busco la info que necesito
    let countryInfo = apiCountries.data.map((coun) => {
        return {
          id: coun.cca3,
          name: coun.name.common,
          capital: coun.capital ? coun.capital[0] : "",
          flag: coun.flags[1],
          continent:coun.continents[0],
          subregion:coun.subregion ? coun.subregion : "",
          area:coun.area,
          population:coun.population,
        }
      })
      //retorno la info mapeada
         return countryInfo;
    };


        // CARGO LA BD
    const loadDb  = async (req, res) => {
       try{
        const countries = await Country.findAll();
        console.log("Verificando Countries");
        if(!countries.length) {
            const arr = await getApiInfo();
            console.log(arr.length);
            await Country.bulkCreate(arr);
        }
        } catch (error) {
            res.json({ error: error.message });
         }      
       }; 
  
    
    // ALIMENTO LA BD CON LO QUE TRAIGO(cargadB)
    const loadingCountries = async (Country) => {
        await loadDb(Country);
    };     


module.exports = {loadingCountries}