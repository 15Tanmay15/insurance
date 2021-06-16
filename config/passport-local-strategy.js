const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const ConnectorData = require('../models/connector_personal_data');
const ConnectorBankDetails = require('../models/connector_bankAccount_details');

passport.use(new LocalStrategy({
    usernameField: 'phone',
    },
    (phone, password, done) => {
        // find a user and establish an identity
        ConnectorData.findOne({phone: phone}, (err, user)=>{
            if(err){
                console.log('error in finding user --> Passport');
                return done(err);
            }

            if(!user || user.password != password){
                console.log('invalid username/password');
                return done(null, false);
            }

            return done(null, user);
        })
    }

));


// serializing the user to decide which key is to be kept in the cookie
passport.serializeUser((user, done) => {
    done(null, user.id);
});


// deserializing the user
passport.deserializeUser((id, done)=> {
    ConnectorData.findById(id, (err, user)=>{
        if(err){
        console.log('error in finding user --> Passport');
        return done(err);
        }
        return done(null, user)
    })
});

passport.checkAuthentication = (req, res, next) => {
    if (req.isAuthenticated()){
        ConnectorBankDetails.findOne({connector: req.user._id}, (err, user) => {
            if(err){console.log('error in finding user', err); return;}

            if(user){
                // return res.redirect('/connector/profile');
                console.log('user', user)
                return next();
            }

            if(!user || user == undefined){
                console.log('user not found')
                return res.redirect('/connector/enter-bankDetails')
            }
        })

        
    }

    // if not
    else{
    return res.redirect('/connector/sign-in');
    }
}

passport.setAuthenticatedUser = (req, res, next) => {
    if (req.isAuthenticated()){
        res.locals.user = req.user;
    }

    next();
}

module.exports = passport;