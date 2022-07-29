/*
 * ROOT ROUTER
 * Redirections to Routers
*/
import express, { Request, Response } from 'express';
import helloRouter from './HelloRouter';
import { LogInfo } from '../utils/logger';

// Server instance
let server = express();
// Router instance
let rootRouter = express.Router();

// Activate for request to -> http://localhost:8000/api/
// ROOT ROUTER:
rootRouter.get('/', (req: Request, res: Response) => {
    LogInfo('Get root router!');
    res.send('Root Router: "/"');
});

// Redirections to Routers & Controllers
server.use('/', rootRouter); // -> http://localhost:8000/api/
server.use('/hello', helloRouter) // -> http://localhost:8000/api/hello
// Add more routes:


export default server;
