const { Router } = require('express');
const countriesRouter =require("./countriesRouter");
const activitiesRouter = require("./activitiesRouter");


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', countriesRouter);
router.use('/activities', activitiesRouter);

module.exports = router;
