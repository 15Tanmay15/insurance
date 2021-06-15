const mongoose = require('mongoose');

const connectorPersonalSchema = new mongoose.Schema({
        phone: {
            type: Number,
            required: true,
            unique: true
        },
        first_name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        insurers: [
            {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Insured'
            }
        ]

},{
    timestamps: true
});


const connector_personal_data = mongoose.model('ConnectorData', connectorPersonalSchema);

module.exports = connector_personal_data;