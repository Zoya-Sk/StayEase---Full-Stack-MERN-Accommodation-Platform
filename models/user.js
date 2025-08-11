const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email:{
        type: String,
        required: true
    }
    // username and password is already defined and stored by password-local-mongoose
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);