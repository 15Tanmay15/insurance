const ConnectorBankDetails = require('../models/connector_bankAccount_details');
const ConnectorData = require('../models/connector_personal_data');
const signUpMailer = require('../mailers/signup_mailer');

module.exports.enterBankDetails = (req, res) => {
    res.render('connector_personal_bankDetails');
}

module.exports.create = (req, res) => {
    ConnectorBankDetails.create({
        Bankname: req.body.Bankname,
        accountNumber: req.body.accountNumber,
        IFSCcode: req.body.IFSCcode,
        connector: req.user._id
    }, (err, details) => {
        if(err){
            console.log('error in adding details');
            return;
        }

        ConnectorBankDetails.findOne({connector: details.connector}).
        populate('connector').
        exec(function(err, user){
            if(err){console.log(err);
                return;}
                signUpMailer.newAccount(user)
        })

        return res.render('connector_personal_profile')
    }
    )
}