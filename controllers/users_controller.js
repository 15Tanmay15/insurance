const User = require('../models/user');


module.exports.profile = (req, res) => {
    if(req.cookies.user_id){
        User.findById(req.cookies.user_id, (err, user) =>{
            if(user){
                return res.render('user_profile', {
                    user: user
                })
            }

            return res.redirect('/users/sign-in');
        })
    }else{
        return res.redirect('/users/sign-in');
    }
}

module.exports.signUp = (req, res) => {
    return res.render('user_signup');
}

module.exports.signIn = (req, res) => {
    return res.render('user_signin');
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
    User.findOne({email: req.body.email}, (err,user) => {
        if(err){console.log('error in finding user', err); return;}

        if(user){
            if(user.password != req.body.password){
                return res.redirect('back');
            }

            res.cookie('user_id', user.id);
            return res.redirect('/users/profile')
        }else{
            return res.redirect('back');
        }
    });
}

module.exports.destroy = (req, res) => {
    if(req.cookies){
        res.cookie('user_id', '');
    }

    return res.redirect('/users/sign-in');
}