const Insured = require('../models/insured');
const ConnectorData = require('../models/connector_personal_data');

module.exports.openFileInsurancePage = (req, res) =>{
    res.render('connector_personal_fileInsurance')
}

module.exports.create = (req, res)=>{
    if(!req.isAuthenticated()){
        return res.redirect('/connector/sign-in')
    }
    // console.log('req.body ', req.body);
    ConnectorData.findById(req.body.connector, (err, connector)=>{
        // console.log('hey 1 ', connector)
        if(connector){
            // console.log('hey 2');
            let insuranceType;
            if(req.body.age){
                insuranceType: 'Term Plan'
            }
            if(req.body.spouseName){
                insuranceType: 'Health Insurance'
            }
            if(req.body.vehicleName){
                insuranceType: 'Vehicle Insurance'
            }
            Insured.create({
                nameOfInsured: req.body.name,
                phoneOfInsured: req.body.phone,
                age: req.body.age,
                source: req.body.source,
                illness: req.body.illness,
                spouseName: req.body.spouseName,
                marriageAnniversary: req.body.marriageAnniversary,
                FChildName: req.body.FChildName,
                SChildName: req.body.SChildName,
                vehicleName: req.body.vehicleName,
                vehicleMake: req.body.vehicleMake,
                TypeOfInsurance: insuranceType,
                connector: req.body.connector
            }, function(err, insured){
                if(err){
                    console.log(err);
                }

                connector.insurers.push(insured);
                connector.save();

                res.redirect('/');
            })
        }
    })
}

module.exports.list = (req, res) => {
    ConnectorData.find({}).populate('insurers').exec(function(err, insurers){
        return res.render('connector_insured', {
            insurers: insurers
        });
});

};