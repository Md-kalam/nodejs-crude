const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema({
    post_id: {
        type: String,
        required: true
    },
    is_buyers: {
        type: Boolean,
        required: true,
    },
    user_details: {
        type: Object,
        required: true
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

const chatschema = mongoose.model('chat', Chat);

module.exports = chatschema;
