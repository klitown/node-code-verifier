import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

// Initial configuration for dotenv
dotenv.config();

// Initialize Express
const app: Express = express();
const port = process.env.PORT || 8000;

// Define the index route for the App
app.get('/', (req: Request, res: Response) => {
    res.send('Index route: "/"');
});

// Execute App
app.listen(port, () => console.log('App running at PORT: ', port));