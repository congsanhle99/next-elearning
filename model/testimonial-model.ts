import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const testimonialSchema = new Schema({
  content: { type: String, required: true },
  rating: { type: Number, required: true },
  courseId: { type: Schema.ObjectId, ref: "Course" },
  user: { type: Schema.ObjectId, ref: "User" },
});

export type ITestimonial = InferSchemaType<typeof testimonialSchema>;

export const Testimonial: Model<ITestimonial> =
  (mongoose.models.Testimonial as Model<ITestimonial> | undefined) ??
  mongoose.model<ITestimonial>("Testimonial", testimonialSchema);
