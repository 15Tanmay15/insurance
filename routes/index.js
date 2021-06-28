const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller')

router.get('/', homeController.home);
router.use('/connector', require('./connector.js'));
router.get('/emi_calculator',homeController.emi_calculator)
router.get('/fd_calculator',homeController.fd_calculator)
module.exports = router;