const ConnectorBankDetails = require('../models/connector_bankAccount_details');

module.exports.enterBankDetails = (req, res) => {
    console.log('Opening Bank Details Page');

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
        return res.render('connector_personal_profile')
    }
    )
}