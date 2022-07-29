import express, { Request, Response } from "express";
import { HelloController } from "../controller/HelloController";
import { LogInfo } from "../utils/logger";

// Router from Express
let helloRouter = express.Router();

// ** -> http://localhost:PORT/api/hello
helloRouter.route('/')
    // GET -> http://localhost:PORT/api/hello?name=Nicolas/
    .get(async (req: Request, res: Response) => {
        // Obtain query param
        let name: any = req?.query?.name;
        LogInfo(`Query param: ${name}`);
        // Controller instance to execute
        const controller: HelloController = new HelloController();
        // Obtain response
        const response = await controller.getMessage(name);
        // Send response to the client
        return res.send(response);
    })

// Export Hello Router
export default helloRouter;