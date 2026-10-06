import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  role: { type: String, required: true },
  bio: { type: String, required: false },
  socialMedia: {
    twitter: { type: String, required: false },
    linkedin: { type: String, required: false },
    facebook: { type: String, required: false },
  },
  profilePicture: { type: String, required: false },
  designation: { type: String, required: false },
});

export type IUser = InferSchemaType<typeof userSchema>;

export const User: Model<IUser> =
  (mongoose.models.User as Model<IUser> | undefined) ?? mongoose.model<IUser>("User", userSchema);
