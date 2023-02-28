const { Activity, Country } = require("../db");

const createActivity = async (idCountry, name, difficulty, duration, season) => {
  const activityCreated = await Activity.create({
    idCountry,
    name,
    difficulty,
    duration,
    season,
  });
  // Busca el Country mediante el body idCountry para colocar la actividad created
  const searchCountry = await Country.findAll({
    where: { 
        id: idCountry },
  });
  // Mete la actividad creada al Pais
  await activityCreated.addCountry(searchCountry);
  return activityCreated;
};

const allAct = async () => {
  return await Activity.findAll();
};

module.exports = {
  createActivity,
  allAct,
};