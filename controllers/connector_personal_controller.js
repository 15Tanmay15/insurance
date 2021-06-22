const ConnectorData = require('../models/connector_personal_data');
const ConnectorBankDetails = require('../models/connector_bankAccount_details');

module.exports.profile = (req, res) => {
    ConnectorData.find({}).
    populate('insurers').exec(function(err, insurers){
        return res.render('connector_personal_profile', {
            insurers: insurers
        });
    });
}

module.exports.signUp = (req, res) => {
    if(req.isAuthenticated()){
        return res.redirect('/connector/profile');
    }

    return res.render('connector_personal_signUp');
}

module.exports.signIn = (req, res) => {
    if(req.isAuthenticated()){
        return res.redirect('/connector/profile')
    }

    return res.render('connector_personal_signIn');
}

module.exports.create = (req, res) => {
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    ConnectorData.findOne({phone: req.body.phone}, (err, user) => {
        if(err){console.log('error in finding user', err); return;}

        if(!user){
            ConnectorData.create(req.body, (err, user) => {
                if(err){console.log('error in creating a user', err); return;}

                return  res.redirect('/connector/sign-in');
            })
        }else{
            return res.redirect('back');
        }
    })

}

module.exports.createSession = (req,res) => {
    return res.redirect('/connector/profile');
}

module.exports.destroySession = (req, res) =>{
    req.logout();

    return res.redirect('/');
}