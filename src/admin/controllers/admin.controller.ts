import CryptoJS from "crypto-js";
import {AdminService} from "../services/admin.service";

export class AdminController {

    async registerAdmin(req: any, res: any) {
        try {
            const { login, email, password } = req.body;
            const token = CryptoJS.AES.encrypt(password, `${process.env.SECRET_KEY}`).toString();

            const data = {
                login,
                email,
                password: token,
                registerDate: Date.now()
            }

            const adminService = new AdminService();
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
}

