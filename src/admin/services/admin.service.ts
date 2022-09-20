import mongoose from "mongoose";

const { adminSchema } = require('../models/admin.model');
const Admin = mongoose.model("Admin", adminSchema);

export class AdminService {

    registerAdmin = async (data: any) => {
        return await Admin.create(data);
    }

}

