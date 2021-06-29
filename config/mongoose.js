const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ts2insurance:Tanmay%409590@cluster0.57suw.mongodb.net/ts2insurance?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to db"));

db.once('open', () => console.log('Successfully connected to the database'));