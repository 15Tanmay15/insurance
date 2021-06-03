const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users_controller')

router.get('/sign-in', usersController.sample);

module.exports = router;