const router = require('express').Router();

const homeController = require('./controllers/homeController');
const addCatController = require('./controllers/addCatCotroller');
const addBreedContoller = require('./controllers/addBreedController');

router.use(homeController);
router.use(addCatController);
router.use(addBreedContoller);

module.exports = router;