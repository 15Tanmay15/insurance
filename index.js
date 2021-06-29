const express = require('express');
const cookieParser = require('cookie-parser');
const db = require('./config/mongoose');
const session = require('express-session');
const app = express();
const port = process.env.PORT || 7000;
const ejs = require('ejs');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo');


app.use(express.urlencoded());
app.use(cookieParser());

app.set('views', './views');
app.set('view engine', 'ejs');

// mongo store is used to store the session cookie in the db
app.use(session({
    name: 'TS2insurance',
    // To change secret before deployment
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000*60*100)
    },
    // TODO Change mongoUrl
    store: MongoStore.create(
        {
        mongoUrl: 'mongodb+srv://ts2insurance:Tanmay%409590@cluster0.57suw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        autoRemove: "disabled"
    },
    (err) => {
        console.log(err || 'connect-mongodb setup ok')
    }
    )
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
