const mongoose = require ("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    category_details: {
        type: Object,
        required: true,
    },
    image_lists: {
        type: Object,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },
    ad_id: {
        type: Number,
    },
    description: { 
        type: String,
        required: true,
    },
    seller_details: {
        type: Object,
        required: true,
    },
    location_details: {
        type: Object,
        required: true,
    },
    status: {
        type: Number,
        required: true,
    },
    buyers_details: {
        type: Object,
    },
    payment_details: {
         type: Object,
    },
    date: {
        type: Date,
        required: true,
    },
   
});

const postsschema = mongoose.model('posts', Posts);
postsschema.plugin(AutoIncrement, { id: "ad_id_seq", inc_field: "ad_id" });

module.exports = postsschema;
