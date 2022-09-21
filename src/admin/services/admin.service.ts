import mongoose from "mongoose";

const { adminSchema } = require('../models/admin.model');
const Admin = mongoose.model("Admin", adminSchema);
const { ObjectId } = require('mongodb');

export class AdminService {

    registerAdmin = async (data: any) => {
        return await Admin.create(data);
    }

    updateAdminInfo = async (req: any) => {
        return await Admin.updateOne( {"_id": ObjectId(req.params.id)}, req.body);
    }

    getAdminInfo = async (req: any) => {
        return await Admin.find();
    }

}

