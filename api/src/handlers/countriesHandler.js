const {
    allCountries,
    getCountryById,
    searchCountryByName,
  } = require("../controllers/countriesControllers");

  const {Country, Activity} = require("../db");
  
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
    const idCountry = req.params.idCountry;
  
    try {
      const country = await Country.findOne({
        where: {
          id: idCountry.toUpperCase(),
        },
        include: [
          {
            model: Activity,
            attributes: ["name", "difficulty", "duration", "season"],
            through: { attributes: [] },
          },
        ],
      });
      if (country) {
        return res.status(200).json(country);
      } else {
        return res.status(400).send("Country not found");
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  module.exports = {
    getCountriesHandler,
    getCountryHandler,
  };
  
  