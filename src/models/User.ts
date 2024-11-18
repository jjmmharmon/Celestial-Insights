import mongoose, { Schema, Document } from 'mongoose';

// Define an interface to represent the document structure
export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
}

// Create a schema for the user
const UserSchema: Schema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

// Export the User model
export default mongoose.model<IUser>('User', UserSchema);
