const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('Terms');
});

router.get('/SignIn', (req, res) => {
    res.render('../../views/SignIn');
});

module.exports = router;//we expore routers which we created const router = express.Router();