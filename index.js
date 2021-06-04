const express = require('express');
const cookieParser = require('cookie-parser');
const db = require('./config/mongoose');
const session = require('express-session');
const app = express();
const port = 7000;
const ejs = require('ejs');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');

app.use(express.urlencoded());
app.use(cookieParser());


app.set('views', './views');
app.set('view engine', 'ejs');

app.use(session({
    name: 'TS2insurance',
    // To change secret before deployment
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000*60*100)
    }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use(express.static('./assets'));
app.use('/', require('./routes'));
app.listen(port, function(err){
    if(!err)
    console.log('Server is running on: ',port);
    else{
    console.log('Error in running the server', err);
    }
})
