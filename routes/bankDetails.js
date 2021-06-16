const express = require('express');
const router = express.Router();
const bankDetailsController = require('../controllers/connector_bank_details');
const passport = require('passport');

router.get('/', bankDetailsController.enterBankDetails);
router.post('/create' ,bankDetailsController.create);

module.exports = router;