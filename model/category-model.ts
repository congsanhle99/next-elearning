import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const categorySchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  thumbnail: { type: String, required: true },
});

export type ICategory = InferSchemaType<typeof categorySchema>;

export const Category: Model<ICategory> =
  (mongoose.models.Category as Model<ICategory> | undefined) ?? mongoose.model<ICategory>("Category", categorySchema);
