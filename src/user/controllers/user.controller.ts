import {UserService} from "../services/user.service";

const userService = new UserService();

export class UserController {

    async getAllUsers(req:any, res: any) {
        try {
            const users = await userService.getAllUsers();
            console.log(users)
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


    async createUser(req:any, res: any) {
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

    async getUserById(req:any, res: any) {
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

    async updateUser(req:any, res: any) {
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

    async deleteUser(req:any, res: any) {
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
