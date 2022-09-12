const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    post_id: {
        type: String,
        required: true
    },
    ip_adddress: {
        type: String,
        requird: true,
    },
    status: {
        type: Number,
        requird: true,
    },
    date: {
        type: Date,
        required: true,
    },
});

const postschema = mongoose.model('post', postSchema);

module.exports = postschema;
