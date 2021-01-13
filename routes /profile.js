const express = require('express');
const router = express.Router();
const connection = require('../config');
const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }
}

router.post('/', verifyToken, (req, res, next) => {
    jwt.verify(req.token, process.env.SECRET_KEY_JWT, (err, user) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({
                firstname: user.result[0].firstname,
                lastname: user.result[0].lastname,
                email: user.result[0].email,
            });
        }
    });
});

module.exports = router;
