const mongoose = require('mongoose');

// const multer = require('multer');
// const path = require('path');
// const ITR_PATH = path.join('/uploads/insured/itr');
// const PPHEALTH_PATH = path.join('/uploads/insured/ppHealth');
// const PPVEHICLE_PATH = path.join('/uploads/insured/ppVehicle');

const insuredSchema = new mongoose.Schema({
        nameOfInsured:{
            type: String,
            required: true
        },
        phoneOfInsured: {
            type: Number,
            required: true
        },
        age:{
            type: Number
        },
        source:{
            type: String
        },
        illness:{
            type: String
        },
        spouseName:{
            type: String
        },
        marriageAnniversary:{
            type: Date
        },
        FChildName:{
            type: String
        },
        SChildName:{
            type: String
        },
        vehicleName:{
            type: String
        },
        vehicleMake:{
            type: String
        },
        // ITRcopy: {
        //     type: String
        // },
        // previousPolicyHealth: {
        //     type: String
        // },
        // previousPolicyVehicle: {
        //     type: String
        // },
        TypeOfInsurance: {
            type: String
        },
        connector: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ConnectorData'
        }
},{
    timestamps: true
});

// let storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, path.join(__dirname, '..', ))
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now())
//     }
//   })



const insured = mongoose.model('Insured', insuredSchema);

module.exports = insured;