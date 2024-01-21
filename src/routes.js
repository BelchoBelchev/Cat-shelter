const router = require('express').Router();

const homeController = require('./controllers/homeController');
const addCatController = require('./controllers/addCatCotroller');

router.use(homeController);
router.use(addCatController);

module.exports = router;