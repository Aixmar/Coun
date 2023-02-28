const {
    allCountries,
    searchCountryById,
    searchCountryByName,
  } = require("../controllers/countriesControllers");


  
  const getCountriesHandler = async (req, res) => {
    try {
      const { name } = req.query;
  
      const results = name
        ? await searchCountryByName(name)
        : await allCountries();
      res.status(200).json(results);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  const getCountryHandler = async (req, res) => {
        try {
          const idCountry = req.params.idCountry;

          const country = idCountry
        ? await searchCountryById(idCountry)
        : await allCountries();
        res.status(200).json(country);
      } catch (error) {
        res.status(400).json({ error: error.message });
      };
    }

      // const country = await Country.findOne({
      //   where: {
      //     id: idCountry.toUpperCase(),
      //   },
      //   include: [
      //     {
      //       model: Activity,
      //       attributes: ["name", "difficulty", "duration", "season"],
      //       through: { attributes: [] },
      //     },
      //   ],
      // });
      // if (country) {
      //   return res.status(200).json(country);
      // } else {
      //   return 
       
  
  
  module.exports = {
    getCountriesHandler,
    getCountryHandler,
  };
  
  