const mongoose = require('mongoose');

const { ObjectId } = require('mongodb');
const { userScheme } = require('../models/user.model');
const User = mongoose.model("User", userScheme);

export class UserService {

    getAllUsers = async () => {
        return await User.find();
    }

    createUser = async (req: any) => {
        return await User.create(req.body);
    };

    getUserById = async (req: any) => {
        return await User.find({"_id": ObjectId(req)});
    };

    updateUser = async (req: any) => {
        return await User.updateOne( {"_id": ObjectId(req.params.id)}, req.body);
    };

    deleteUser = async (req: any) => {
        return await User.deleteOne({"_id": ObjectId(req)});
    };

}

