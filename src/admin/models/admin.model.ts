import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
    {
        login: String,
        email: String,
        password: String,
        registerDate: Date,
    });

mongoose.model('Admin', AdminSchema);
