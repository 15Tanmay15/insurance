const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

passport.use(new LocalStrategy({
    usernameField: 'email'
    },
    (email, password, done) => {
        // find a user and establish an identity
        User.findOne({email: email}, (err, user)=>{
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
    User.findById(id, (err, user)=>{
        if(err){
        console.log('error in finding user --> Passport');
        return done(err);
        }

        return done(null, user)
    })
});


module.exports = passport;