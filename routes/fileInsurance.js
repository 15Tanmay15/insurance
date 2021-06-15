const express = require('express');
const router = express.Router();
const passport = require('passport');
const insuredController = require('../controllers/connector_insured_controller');

router.get('/', insuredController.openFileInsurancePage);
router.post('/create', passport.checkAuthentication, insuredController.create);

module.exports = router;