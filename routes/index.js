const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller')
const insurance_controller = require('../controllers/life_insurance_controller')

router.get('/', homeController.home);
router.get('/emi-calculator', homeController.emi_calculator);
router.use('/connector', require('./connector.js'));
router.get('/emi_calculator',homeController.emi_calculator)
router.get('/fd_calculator',homeController.fd_calculator)
router.get('/rd_calculator',homeController.rd_calculator)
router.get('/life_insurance',insurance_controller.life_insurance)
module.exports = router;