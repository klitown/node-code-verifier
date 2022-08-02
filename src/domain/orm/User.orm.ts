import { userEntity } from "../entities/User.entity";
import { LogError, LogSuccess } from "@/utils/logger";

// CRUD Operations

/**
 * Method to obtain all users from the collecion 'Users' in MongoDB
 */
export const GetAllUsers = async (): Promise<any> => {
    try {
        // create the user model:
        let userModel = userEntity();
        // Search all users:
        return await userModel.find({
            isDelete: false
        });
    } catch (error) {
        LogError(`ORM ERROR: Getting all users: ${error}`)
    }
}