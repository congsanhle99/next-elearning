import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const moduleSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true },
  slug: { type: String, required: true },
  course: { type: Schema.ObjectId, ref: "Course" },
  lessonIds: [{ type: Schema.ObjectId, ref: "Lesson" }],
  duration: { type: Number, required: true },
});

export type IModule = InferSchemaType<typeof moduleSchema>;

export const Module: Model<IModule> =
  (mongoose.models.Module as Model<IModule> | undefined) ?? mongoose.model<IModule>("Module", moduleSchema);
