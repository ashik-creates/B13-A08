import { getAllData } from "@/lib/api";
import CourseCard from "@/ui/CourseCard";


const CoursesPage = async() => {
    const allCourses = await getAllData();
    
    return (
        <div>
            <h1 className="text-3xl text-center py-10 font-bold">All Courses</h1>
            <div className="grid grid-cols-4 gap-5 container mx-auto">
                {allCourses.map(course=> <CourseCard key={course.id} course={course}></CourseCard>)}
            </div>
        </div>
    );
};

export default CoursesPage;