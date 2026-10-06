import { Course } from "../model/course-model";

export const getAllCourses = async () => {
  const courses = await Course.find({});
  return courses;
};
