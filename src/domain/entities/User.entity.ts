import mongoose from "mongoose";

// Schema for the User entity!
export const userEntity = () => {
    let userSchema = new mongoose.Schema(
        {
            name: String,
            email: String,
            age: Number
        }
    );
    // Create the model for the "Users" collection
    // And passing the schema created above
    return mongoose.model('Users', userSchema);

}