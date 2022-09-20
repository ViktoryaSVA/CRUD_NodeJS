import express from 'express';
import {UserController} from "../controllers/user.controller";

const userController = new UserController();
const router = express.Router();

router.get('/GetAllUsers', userController.getAllUsers);
router.post('/CreateUser', userController.createUser);
router.get('/GetUserById/:id', userController.getUserById);
router.put('/UpdateUser/:id', userController.updateUser);
router.delete('/DeleteUser/:id', userController.deleteUser);

export = router;