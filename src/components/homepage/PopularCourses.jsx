import { getAllData } from "@/lib/api";
import CourseCard from "@/ui/CourseCard";
import {  FaFireAlt } from "react-icons/fa";

const PopularCourses = async () => {
  const allCourses = await getAllData();
  const courses = [...allCourses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);
  return (
    <div className="shadow-sm border-t border-b border-gray-200 mt-10 py-10 bg-white">
      <div className="mt-4  container mx-auto ">
      <div className="flex justify-center items-center gap-2">
        <FaFireAlt className="w-8 h-8 text-center text-red-500"></FaFireAlt>
        <h2 className="text-center max-[300px]:text-2xl text-3xl font-bold">Popular Courses</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 container mx-auto gap-5 mt-5  rounded-2xl py-4">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course}></CourseCard>
        ))}
      </div>
    </div>
    </div>
  );
};

export default PopularCourses;
