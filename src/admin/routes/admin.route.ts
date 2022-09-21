import express from 'express';
import {AdminController} from "../controllers/admin.controller";

const adminController = new AdminController();
const router = express.Router();

router.post('/RegisterAdmin', adminController.registerAdmin);
router.get('/GetAdminInfo', adminController.getAdminInfo);
router.put('/UpdateAdminInfo/:id', adminController.updateAdminInfo);

module.exports = router;
