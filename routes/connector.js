const express = require('express');
const router = express.Router();
const passport = require('passport');
const connectorPersonalController = require('../controllers/connector_personal_controller')

router.get('/profile', passport.checkAuthentication, connectorPersonalController.profile);

router.get('/sign-in', connectorPersonalController.signIn);
router.get('/sign-up', connectorPersonalController.signUp);

router.use('/enter-bankDetails', require('./bankDetails'));
router.use('/file-insurance', require('./fileInsurance'));

router.post('/create', connectorPersonalController.create);
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/connector/sign-in'}
), connectorPersonalController.createSession)

router.get('/sign-out', connectorPersonalController.destroySession);

module.exports = router;