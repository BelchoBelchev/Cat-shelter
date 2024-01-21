const router = require('express').Router();

const catsService = require('../services/catService');
const breedsService = require('../services/breedService');

router.get('/cats/add-cat', (req, res) => {
    const breeds = breedsService.getAll();
    res.render('addCat', { breeds });
});

router.post('/cats/add-cat', (req, res) => {
    const newCat = req.body;
    catsService.create(newCat);
    res.redirect('/');
});

module.exports = router;