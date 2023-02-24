// // //estas funciones si pueden interactuar con el modelo
const { Op } = require("sequelize");
const {Country , Activity} = require("../db");


const allCountries = async (name) => {
   return await Country.findAll();
};
//traeme todos donde name sea = name.

const searchCountryByName = async (name) => {
 const searchName = await Country.findAll({
    where:{
        name: { [Op.iLike]:`%${name}%`},
          },
 });
 if (!searchName.length) return (`There is no country with ${name}`);
  else return searchName;
};



   
module.exports = {
    allCountries,
    searchCountryByName,
    
}