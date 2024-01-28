const router = require('express').Router();

const catsService = require('../services/catService');

router.get('/', (req, res) => {
    const cats = catsService.getAll();
    res.render('home', { cats });
});

module.exports = router;