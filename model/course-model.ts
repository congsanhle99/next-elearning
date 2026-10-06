import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const courseSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  thumbnail: { type: String, required: true },
  modules: { type: [{ type: Schema.ObjectId, ref: "Module" }], required: true },
  price: { type: Number, default: 0, required: true },
  active: { type: Boolean, default: false, required: true },
  category: { type: Schema.ObjectId, ref: "Category", required: true },
  instructor: { type: Schema.ObjectId, ref: "User", required: true },
  testimonials: { type: [{ type: Schema.ObjectId, ref: "Testimonial" }], required: true },
  quizSet: { type: Schema.ObjectId, ref: "Quizset", required: true },
  learning: { type: [{ type: String }], required: true },
  createdOn: { type: Date, default: Date.now, required: true },
  modifiedOn: { type: Date, default: Date.now, required: true },
});

export type ICourse = InferSchemaType<typeof courseSchema>;

export const Course: Model<ICourse> =
  (mongoose.models.Course as Model<ICourse> | undefined) ?? mongoose.model<ICourse>("Course", courseSchema);
