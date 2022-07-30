import { Get, Query, Route, Tags } from 'tsoa';
import { BasicResponse } from "./types";
import { IHelloController } from "./interfaces";
import { LogSuccess } from '../utils/logger';

@Route("/api/hello")
@Tags("HelloController")
export class HelloController implements IHelloController {
    /**
     * Endpoint to retrieve a Message
     * @param name Name of user
     * @returns {BasicResponse} Promise<BasicResponse>
     */
    @Get("/")
    public async getMessage(@Query() name?: string): Promise<BasicResponse> {
        LogSuccess('[/api/hello]: Get request');
        return {
            message: `Hello ${name || "stranger!"}`
        }
    }

}