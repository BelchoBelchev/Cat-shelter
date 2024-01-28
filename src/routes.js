const router = require('express').Router();

const homeController = require('./controllers/homeController');
const addCatController = require('./controllers/addCatCotroller');
const addBreedContoller = require('./controllers/addBreedController');
const editController = require('./controllers/editController');
const shelterTheCat = require('./controllers/shelterTheCat');

router.use(homeController);
router.use(addCatController);
router.use(addBreedContoller);
router.use(editController);
router.use(shelterTheCat);

module.exports = router;