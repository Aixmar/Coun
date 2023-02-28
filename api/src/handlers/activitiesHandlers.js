const {
    createActivity,
    allAct,
  } = require("../controllers/activitiesControllers");

const getActivitiesHandler = async (req, res) => {
    try {
      const allActivities = await allAct();
      if (!allActivities.length ) {
        throw Error("No activities created");
      } else {
        res.status(200).json(allActivities);
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  const createActivityHandler = async (req, res) => {
    try {
      const { idCountry, name, difficulty, duration, season } = req.body;
      if (!idCountry || !name || !difficulty || !season) throw Error("Data missing");
      else {
        const newActivity = await createActivity(
          idCountry,
          name,
          difficulty,
          duration,
          season
        );
        res.status(200).json(idCountry);
        // res.status(200).json("Activity created successfully");
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  module.exports = {
    getActivitiesHandler,
    createActivityHandler,
  };
  