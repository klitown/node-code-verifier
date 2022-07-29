"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = __importDefault(require("./src/server"));
const logger_1 = require("./src/utils/logger");
// Env file
dotenv_1.default.config();
const port = process.env.PORT || 8000;
// * Execute server:
server_1.default.listen(port, () => {
    (0, logger_1.LogSuccess)(`Server running in port: https://localhost:${port}/api`);
});
// Control Server Error
server_1.default.on('error', (error) => {
    (0, logger_1.LogError)(`Server error. Details: ${error}`);
});
//# sourceMappingURL=index.js.map