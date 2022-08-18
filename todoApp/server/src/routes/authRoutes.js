const express = require('express');
const  auth  = require('../controller/authController');
const router = express.Router();

router.route('/login').post(auth.login);
router.route('/register').post(auth.register);

module.exports = router