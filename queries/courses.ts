import { Category } from "@/model/category-model";
import { Course } from "../model/course-model";
import { User } from "@/model/user-model";
import { Testimonial } from "@/model/testimonial-model";
import { Module } from "@/model/module-model";

export const getAllCourses = async () => {
  const courses = await Course.find({})
    .populate({
      path: "category",
      model: Category,
    })
    .populate({
      path: "instructor",
      model: User,
    })
    .populate({
      path: "testimonials",
      model: Testimonial,
    })
    .populate({
      path: "modules",
      model: Module,
    });
  return courses;
};
