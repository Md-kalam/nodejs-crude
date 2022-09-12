const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const billing = new Schema({
    create_user_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    contact_no: {
        type: Number,
        required: true
    },
    address_details: {
        type: Object,
        required: true
    },
    payment_details: {
        type: Object,
        required: false
    },
    status: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },

});
const billingschema = mongoose.model('billing', billing);

module.exports = billingschema;