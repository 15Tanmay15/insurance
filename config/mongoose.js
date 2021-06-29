const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ts2insurance:ts2@ts2insurance.57suw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to db"));

db.once('open', () => console.log('Successfully connected to the database'));