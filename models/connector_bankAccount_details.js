const mongoose = require('mongoose');

const connectorBankDetails = new mongoose.Schema({
        Bankname: {
            type: String,
            required: true
        },
        accountNumber: {
            type: Number,
            required: true
        },
        IFSCcode: {
            type: String,
            required: true
        },
        connector: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ConnectorData'
        }

},{
    timestamps: true
});


const connector_personal_bankDetails = mongoose.model('ConnectorBankDetails', connectorBankDetails);

module.exports = connector_personal_bankDetails;