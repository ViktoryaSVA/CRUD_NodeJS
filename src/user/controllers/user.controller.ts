import mongoose from "mongoose";
import {UserService} from "../services/user.service";
import { Request, Response } from "express";

const userService = new UserService();
mongoose.connect(`mongodb://localhost:27017/${process.env.MONGODB_DB}`);

export class UserController {

    async getAllUsers(req: Request, res: Response) {
        try {
            const users = await userService.getAllUsers();
            res.send({
                    data: users,
                    status: 200
            });

        } catch (error) {
            res.send({
                data: error,
                status: 500
            });
        }
    }

    async createUser(req: Request, res: Response) {
        try {
            await userService.createUser(req);
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

    async getUserById(req: any, res: Response) {
        try {
            const user = await userService.getUserById(req.params.id);
            res.send({
                data: user,
                status: 200
            });
        } catch (error) {
            res.send({
                data: error,
                status: 500
            });
        }
    }

    async updateUser(req: Request, res: Response) {
        try {
            await userService.updateUser(req);
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

    async deleteUser(req: any, res: Response) {
        try {
            const user = await userService.deleteUser(req.params.id);
            res.send({
                data: user,
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
