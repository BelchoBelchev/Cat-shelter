const router = require('express').Router();

const breedsService = require('../services/breedService');

router.get('/cats/add-cat', (req, res) => {
    const breeds = breedsService.getAll();
    res.render('addCat', { breeds });
});

module.exports = router;