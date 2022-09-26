
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html');
});

router.get('/SignIn', (req, res) => {
    res.render('SignIn.html');
});
router.get('/Prices', (req, res) => {
    res.render('Prices.html');
});
router.get('/booking', (req, res) => {
    res.render('booking.html');
});
router.get('/Contacts', (req, res) => {
    res.render('Contacts.html');
});
router.get('/Specialists', (req, res) => {
    res.render('Specialists.html');
});
router.get('/Privacy', (req, res) => {
    res.render('Privacy.html');
});
router.get('/profile', (req, res) => {
    res.render('profile.html');
});
router.get('/Questions', (req, res) => {
    res.render('Questions.html');
});
router.get('/Terms', (req, res) => {
    res.render('Terms.html');
});

module.exports = router;