const express = require('express');
const db = require('./config/mongoose');
const app = express();
const port = 7000;
const ejs = require('ejs');

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('./assets'));
app.use('/', require('./routes'));
app.listen(port, function(err){
    if(!err)
    console.log('Server is running on: ',port);
    else{
    console.log('Error in running the server', err);
    }
})
