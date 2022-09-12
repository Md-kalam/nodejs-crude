const mongoose = require ("mongoose");
const paymentSchema = new Schema({
    
    create_post_id: {
       type: String,
       required: true
    },
    name: {
        type: String,
        required: true,
    },
    contact_no: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    role: {
        type: String,
        default: Customer,
    },
    address: {
        type: object,
        required: true,
    },
    bank_details: {
        type: Object,
        required: true,
    },
    status: {
        type: Number,
        required: true,
    },

});

const paymentschema = mongoose.model('payment', paymentSchema);

module.exports = paymentschema;