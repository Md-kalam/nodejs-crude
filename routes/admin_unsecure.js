const express = require('express');
const router = express.Router();


const registerController = require('./auth_controller/register');
router.use('/register', registerController)

const loginController = require('./auth_controller/login');
router.use('/login', loginController)

const userShowController = require('./users/get_show');
router.use('/users', userShowController)

module.exports = router;