import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

// Define the interface for the User document
export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

// Define the schema for the User model
const UserSchema: Schema<IUser> = new Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Hash the password before saving the user
UserSchema.pre<IUser>('save', async function (next) {
  if (!this.isModified('password')) return next(); // Only hash the password if it's modified

  const salt = await bcrypt.genSalt(10); // Generate salt
  this.password = await bcrypt.hash(this.password, salt); // Hash the password with salt
  next();
});

// Compare entered password with hashed password
UserSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password); // Compare the entered password with the stored hashed password
};

// Export the User model
const User = mongoose.model<IUser>('User', UserSchema);
export default User;
