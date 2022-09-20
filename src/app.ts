import http from 'http';
import express, { Express } from 'express';
import 'dotenv/config';

require('dotenv').config()

const routesUser = require('./user/routes/user.route');
const router: Express = express();

router.use(express.urlencoded({ extended: false }));
router.use(express.json());
router.use('/', routesUser);

const httpServer = http.createServer(router);
const PORT: any = process.env.PORT;

httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
