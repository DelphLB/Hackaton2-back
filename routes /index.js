const express = require('express');
const router = express.Router();

const users = require('./users');
const recettes = require('./recettes');
const profile = require('./profile');
const twilio = require('./twilio');

router.use('/users', users);
router.use('/recettes', recettes);
router.use('/profile', profile);
router.use('/twilio', twilio);
router.get('/', (req, res) => {
    res.send('OK');
});
module.exports = router;
