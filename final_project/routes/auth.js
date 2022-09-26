const express = require('express');
const authController = require('../controllers/auth');

const router = express.Router();

router.post('/SignIn', authController.SignIn);// deal with data from the form(SignIn from controllers auth.js)

module.exports = router;//we expore routers which we created