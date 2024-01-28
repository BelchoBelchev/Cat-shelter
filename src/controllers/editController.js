const router = require('express').Router();

const catsService = require('../services/catService');
const breedsService = require('../services/breedService');

router.get('/edit/:id', (req, res) => {
    const catId = req.params.id;
    const cat = catsService.getOne(catId);

    const breeds = breedsService.getAll();

    res.render('editCat', { cat, breeds });
});

router.post('/edit/:id', (req, res) => {
    const id = req.params.id;
    const editedCat = {
        _id: id,
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
        breed: req.body.breed
    }
    
    catsService.update(id, editedCat);
    res.redirect('/');
});

module.exports = router;