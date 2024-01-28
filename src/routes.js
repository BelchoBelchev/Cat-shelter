const router = require('express').Router();

const homeController = require('./controllers/homeController');
const addCatController = require('./controllers/addCatCotroller');
const addBreedContoller = require('./controllers/addBreedController');
const editController = require('./controllers/editController');
const shelterTheCatController = require('./controllers/shelterTheCatController');

router.use(homeController);
router.use(addCatController);
router.use(addBreedContoller);
router.use(editController);
router.use(shelterTheCatController);

module.exports = router;