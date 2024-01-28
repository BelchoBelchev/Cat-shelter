const router = require('express').Router();

const catsService = require('../services/catService');

router.get('/', (req, res) => {
    const cats = catsService.getAll();
    res.render('home', { cats });
});

router.post('/search', (req, res) => {
    const search = req.body.search;
    const cats = catsService.search(search);

    res.render('home', { cats });
});

module.exports = router;