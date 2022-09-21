import http from 'http';
import express, { Express } from 'express';
import 'dotenv/config';

require('dotenv').config()

const routeUsers = require('./user/routes/user.route');
const routeAdmin = require('./admin/routes/admin.route');
const router: Express = express();

router.use(express.urlencoded({ extended: false }));
router.use(express.json());
router.use('/', routeUsers);
router.use('/Admin', routeAdmin);

const httpServer = http.createServer(router);
const PORT: any = process.env.PORT;

httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
