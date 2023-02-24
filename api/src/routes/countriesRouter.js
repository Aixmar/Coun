const {Router} = require("express");
const {getCountriesHandler, getCountryHandler} = require("../handlers/countriesHandler");


const router = Router();

 router.get("/", getCountriesHandler);
 router.get("/:idCountry", getCountryHandler);

    module.exports = router;