const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname: {
        type:String,
        required:true,
        min:3,
        max:20,        
    },
    lastname: {
        type:String,
        required: true,
        max:20,
    },
    password: {
        type: String,
        required: true,
        min: 8,
        // unique: true,
    },
    emailID: {
        type: String,
        required: true,
        unique: true,
        max: 50,
    },
    gender: {
        type : String,
    },
    year: {
        type: String,
        required: true,
    },
    hostel: {
        type: String,
        required: true,
    },
    phonenumber: {
        type: String,
        required: true,
    },
    registrationnumber: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        required: true,
    },
    isAvatarImageSet: {
        type: Boolean,
        default: false,
    },
    avatarImage: {
        type: String,
        default: "",
    },
    admin: {
        type: String,
    }
});

module.exports = mongoose.model("Users",userSchema);
