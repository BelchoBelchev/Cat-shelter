const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Hello Ala Bala');
});

module.exports = router;