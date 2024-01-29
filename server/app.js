import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser"; 
import {assignRoutes} from './src/router/main-router.js';
import helmet from 'helmet';
import morgan from 'morgan';
const app = express();

export function bootstrapApplication() {
    app.use(express.json());
    app.use(cors());
    app.use(bodyParser.json());
    app.use(helmet());
    app.use(morgan('combined'))
    app.use('/api', assignRoutes());

    return app;
}

// // app.js
// /express
// |-- server
// |   |-- Database
// |   |   |-- database.js
// |   |-- app.js
// |   |-- server.js
// |-- src
//     |--router/
//              -- main-router.js
// |   |-- user
// |   |   |-- userInfo-model.js
// |   |   |-- user-router.js
// |   |   |-- user-controller.js
// |   |   |-- user-service.js
// |   |   |-- user-repository.js
// |