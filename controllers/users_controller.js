const User = require('../models/user');

module.exports.profile = (req, res) => {
    // if()
    return res.render('user_profile');
}

module.exports.signUp = (req, res) => {
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    return res.render('user_signup');
}

module.exports.signIn = (req, res) => {
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    return res.render('user_signIn');
}

module.exports.create = (req, res) => {
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, (err, user) => {
        if(err){console.log('error in finding user', err); return;}

        if(!user){
            User.create(req.body, (err, user) => {
                if(err){console.log('error in creating a user', err); return;}

                return  res.redirect('/users/sign-in')
            })
        }else{
            return res.redirect('back');
        }
    })
}


module.exports.createSession = (req,res) => {
    return res.redirect('/users/profile');
}

module.exports.destroySession = (req, res) =>{
    req.logout();

    return res.redirect('/');
}