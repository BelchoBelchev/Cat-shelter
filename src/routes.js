const router = require('express').Router();

const homeController = require('./controllers/homeController');
const addCatController = require('./controllers/addCatCotroller');
const addBreedContoller = require('./controllers/addBreedController');
const editController = require('./controllers/editController');

router.use(homeController);
router.use(addCatController);
router.use(addBreedContoller);
router.use(editController);

module.exports = router;