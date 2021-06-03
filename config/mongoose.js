const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/insurance_db');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to db"));

db.once('open', () => console.log('Successfully connected to the database'));