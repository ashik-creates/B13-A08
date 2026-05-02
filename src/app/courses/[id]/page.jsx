import Image from "next/image";
import { Card, Button } from "@heroui/react";
import { FaSignal, FaClock, FaFolderOpen, FaStar } from "react-icons/fa";
import Link from "next/link";
import { getAllData } from "@/lib/api";

const CourseDetailsPage = async ({ params }) => {
  const { id } = await params;

  
  const allCourse = await getAllData();

  const course = allCourse.find((c) => c.id == id);

  const curriculum = [
    "Introduction to Web Development",
    "HTML5 & Semantic Structure",
    "CSS3, Flexbox and Grid",
    "JavaScript Fundamentals",
    "DOM Manipulation & Events",
    "React Basics and Components",
    "Next.js Routing and Layouts",
    "Backend with Node.js & Express",
    "MongoDB Database Integration",
    "Authentication & Deployment",
  ];
  return (
    <div className="container mx-auto">
      <Card className=" mt-10 p-6 shadow-sm rounded-2xl">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="relative aspect-video">
            <Image
              src={course.image}
              alt={course.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-xl object-fill w-full h-full"
            />

            <div className="absolute top-2 left-2 flex items-center gap-1 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-lg">
              <FaStar /> {course.rating}
            </div>

            <div className="absolute bottom-4 left-4 flex items-center gap-3 bg-black/60 text-white px-3 py-2 rounded-lg">
              <div className="text-lg">
                <p className="font-semibold">{course.instructor}</p>
                <p className="text-xs opacity-80">Instructor</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex-1 space-y-4">
              <h1 className="text-4xl font-bold">{course.title}</h1>

              <p className="text-gray-600 text-lg">{course.description}</p>

              <div className="flex flex-wrap gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <FaClock className="text-indigo-600 w-7 h-7" />
                  <div>
                    <p className="font-semibold">{course.duration}</p>
                    <p className="text-xs">Duration</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <FaSignal className="text-green-600 w-7 h-7" />
                  <div>
                    <p className="font-semibold">{course.level}</p>
                    <p className="text-xs">Level</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <FaFolderOpen className="text-orange-500 w-7 h-7" />
                  <div>
                    <p className="font-semibold">{course.category}</p>
                    <p className="text-xs">Category</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href={"/courses"}>
                <Button className="ml-auto bg-[#1d8386] text-white">
                  All Courses
                </Button>
              </Link>
              <Button variant="outline">Enroll Now</Button>
            </div>
          </div>
        </div>
      </Card>
      <Card className="text-center mt-10 shadow-sm">
        <h2 className="text-2xl font-semibold mb-6">Course Curriculum</h2>
        <div className="flex flex-wrap gap-5 justify-center items-center">
          {curriculum.map((item, index) => (
            <div
              key={index}
              className="shadow-md bg-linear-to-r from-blue-200 to-red-200 rounded-lg p-4"
            >
              {item}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default CourseDetailsPage;
