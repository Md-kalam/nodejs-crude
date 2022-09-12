const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const admin = new Schema({
    create_user_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "customer" ,
    },
    bank_details: {
        type: Object,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    status: {
        type: Number,
        required: true,
    },
});

const adminschema = mongoose.model('admin', admin);
module.exports = adminschema;

