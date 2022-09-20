import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        userName: String,
        email:String,
        password: String,
    });

mongoose.model('User', UserSchema);