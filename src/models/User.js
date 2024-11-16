import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

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

// Hash the password before saving the user
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();  // Only hash the password if it's modified

  const salt = await bcrypt.genSalt(10);  // Generate salt
  this.password = await bcrypt.hash(this.password, salt);  // Hash the password with salt
  next();
});

// Compare entered password with hashed password
UserSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
  return bcrypt.compare(password, this.password);  // Compare the entered password with the stored hashed password
};

// Export the User model
export default mongoose.model<IUser>('User', UserSchema);
