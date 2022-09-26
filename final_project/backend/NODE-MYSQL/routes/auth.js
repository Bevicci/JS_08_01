const express = require('express');
const authController = require('../controllers/auth');

const router = express.Router();

router.post('/register', authController.register);// deal with data from the form

module.exports = router;//we expore routers which we created