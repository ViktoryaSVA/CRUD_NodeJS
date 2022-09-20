import express from 'express';

import {AdminController} from "../../admin/controllers/admin.controller";
const adminController = new AdminController();

const router = express.Router();

router.post('/RegisterAdmin', adminController.registerAdmin);
