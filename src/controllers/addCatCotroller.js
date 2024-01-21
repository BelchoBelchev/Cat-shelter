const router = require('express').Router();

router.get('/cats/add-cat', (req, res) => {
    res.render('addCat');
});

module.exports = router;