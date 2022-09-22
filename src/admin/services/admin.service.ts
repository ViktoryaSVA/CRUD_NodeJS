import mongoose from "mongoose";
import { Request } from "express";

const { adminSchema } = require('../models/admin.model');
const Admin = mongoose.model("Admin", adminSchema);
const { ObjectId } = require('mongodb');

export class AdminService {

    registerAdmin = async (data: any) => {
        return await Admin.create(data);
    }

    updateAdminInfo = async (req: Request) => {
        return await Admin.updateOne( {"_id": ObjectId(req.params.id)}, req.body);
    }

    getAdminInfo = async (req: Request) => {
        return await Admin.find();
    }

}

