import mongoose, { Schema, Document } from 'mongoose';

// Define the interface for the User document
interface IUser extends Document {
  username: string;
  email: string;
  password: string;
}

// Define the schema for the User model
const UserSchema: Schema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

// Export the User model
export default mongoose.model<IUser>('User', UserSchema);
