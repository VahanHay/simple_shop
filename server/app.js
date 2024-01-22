import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser"; 
import {assignRoutes} from './src/router/main-router.js';
import helmet from 'helmet';
import morgan from 'morgan';
const app = express();

//
// import EventEmitter from 'events';
//
// // Create an instance of EventEmitter
// const myEmitter = new EventEmitter();
//
// // Set the maximum number of listeners to 15
// myEmitter.setMaxListeners(15);

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
//              main router
// |   |-- user
// |   |   |-- userInfo-model.js
// |   |   |-- user-router.js
// |   |   |-- user-controller.js
// |   |   |-- user-service.js
// |   |   |-- user-middleware.js
// |   |   |-- user-repository.js
// |-- main-router.js