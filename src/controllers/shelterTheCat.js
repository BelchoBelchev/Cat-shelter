const router = require('express').Router();

const catsService = require('../services/catService');
const breedsService = require('../services/breedService');

router.get('/shelter/:id', (req, res) => {
    const catId = req.params.id;
    const cat = catsService.getOne(catId);

    const breeds = breedsService.getAll();

    res.render('catShelter', { cat, breeds });
});

router.post('/shelter/:id', (req, res) => {
    const catId = req.params.id;

    catsService.del(catId);
    res.redirect('/');
});

module.exports = router;