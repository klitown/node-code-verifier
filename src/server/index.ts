import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
// Router
import rootRouter from '../routes'

// Create Express APP
let server = express();

// Define SERVER to use "/api" and use rootRouter from "index.ts" in routes
server.use(
    '/api',
    rootRouter
);

// Static server
server.use(express.static('public'));

// TODO: Mongoose Connection

// Security config
server.use(helmet());
server.use(cors());

// Content-type config
server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));


// Redirection config
server.get('/', (req: Request, res: Response) => {
    res.redirect('/api')
});


export default server;
