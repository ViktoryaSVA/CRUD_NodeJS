const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        userName: String,
        email:String,
        password: String,
    });

mongoose.model('User', UserSchema);
