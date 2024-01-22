const router = require('express').Router();

const breedsService = require('../services/breedService');

router.get('/cats/add-breed', (req, res) => {
    res.render('addBreed');
});

router.post('/cats/add-breed', (req, res) => {
    const newBreed = req.body;
    breedsService.create(newBreed);
    res.redirect('/');
})

module.exports = router;