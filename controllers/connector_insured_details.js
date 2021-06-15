const Insured = require('../models/insured');

Insured.find({}, (err, insured)=>{
    return res.render('connector_insured', {
        insured: insured
    })
})