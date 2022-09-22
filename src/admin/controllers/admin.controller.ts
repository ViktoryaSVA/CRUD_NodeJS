import mongoose from "mongoose";
import CryptoJS from "crypto-js";
import {AdminService} from "../services/admin.service";
import { Request, Response } from "express";

mongoose.connect(`mongodb://localhost:27017/${process.env.MONGODB_DB}`);
const adminService = new AdminService();

export class AdminController {

    async registerAdmin(req: Request, res: Response) {
        try {
            const { login, email, password } = req.body;
            const token = CryptoJS.AES.encrypt(password, `${process.env.SECRET_KEY}`).toString();

            const data = {
                login,
                email,
                password: token,
                registerDate: Date.now()
            }

            await adminService.registerAdmin(data);

            res.send({
                data: data,
                status: 200
            });
        } catch (error) {
            res.send({
                data: error,
                status: 500
            });
        }
    }

    async updateAdminInfo(req: Request, res: Response) {
        try {
            await adminService.updateAdminInfo(req);
            res.send({
                data: req.body,
                status: 200
            });

        } catch (error) {
            res.send({
                data: error,
                status: 500
            });
        }
    }

    async getAdminInfo(req: Request, res: Response) {
        try {
            const admin = await adminService.getAdminInfo(req);
            res.send({
                data: admin,
                status: 200
            });

        } catch (error) {
            res.send({
                data: error,
                status: 500
            });
        }
    }
}

