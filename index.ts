import dotenv from 'dotenv';
import server from './src/server';
import { LogError, LogSuccess } from './src/utils/logger';

// Env file
dotenv.config();

const port = process.env.PORT || 8000;

// * Execute server:
server.listen(port, () => {
    LogSuccess(`Server running in port: https://localhost:${port}/api`);
});

// Control Server Error
server.on('error', (error) => {
    LogError(`Server error. Details: ${error}`)
});