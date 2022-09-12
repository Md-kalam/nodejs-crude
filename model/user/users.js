const mongoose = require("mongoose");
//bcrypt password ko increpit use kia jatah hai
//password input rha to woh change hojayega
const bcrypt = require ('bcrypt');

const Schema = mongoose.Schema;
// schema design
const UsersModel = new Schema({
   
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
        type:String,
        required: true,
    },
    contact_no: {
        type: Number,
        required: true,
    },
    status: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    message: {
        type: String,
    
    },
    city: {
        type: String,
        required: false,
        default: null,
    },
    profilePic: {
        type: String,
        required: false,
    }
    
});
// increpit form save
UsersModel.pre("save", async function name(next) {
    // encrypt form autoencrypt
    //bt default ye this ma ajaye
    const user = this;
// salt number generate kia
    const salt = await bcrypt.genSalt(10);
// yaha hash generate kia
    const hash = await bcrypt.hash(user.password, salt);
// increpit hua 
    this.password = hash;
    next();
})
const UsersSchema = mongoose.model('users', UsersModel);

module.exports = UsersSchema;
