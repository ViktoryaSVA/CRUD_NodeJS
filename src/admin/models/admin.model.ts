import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
    {
        userName: String,
        password: String,
    });

mongoose.model('Admin', AdminSchema);
