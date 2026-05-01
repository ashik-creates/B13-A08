import SearchBar from "@/components/allCourses/SearchBar";
import { getAllData } from "@/lib/api";
import CourseCard from "@/ui/CourseCard";

const CoursesPage = async ({ searchParams }) => {
  const { search } = await searchParams;
  const allCourses = await getAllData();

  const filteredCourses = search
    ? allCourses.filter((course) => course.title.toLowerCase().includes(search))
    : allCourses;

  return (
    <div className="mb-10 container mx-auto">
      <h1 className="text-3xl text-center pt-10 pb-5 font-bold">All Courses</h1>
      <SearchBar></SearchBar>
        {filteredCourses.length === 0 ? <p className="container mx-auto py-20 px-2 shadow-sm text-center my-5 border border-gray-200 bg-white rounded-xl text-2xl font-semibold text-gray-500">No Course Available</p> : <div className="grid grid-cols-4 gap-5">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course}></CourseCard>
        ))}
      </div>}
    </div>
  );
};

export default CoursesPage;
