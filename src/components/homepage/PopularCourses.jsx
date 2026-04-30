import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import { BiStar } from "react-icons/bi";
import { FaChalkboardTeacher, FaFireAlt } from "react-icons/fa";

const PopularCourses = () => {
  const courses = [
    {
      id: 4,
      title: "JavaScript Deep Dive",
      instructor: "Emily Johnson",
      duration: "18 hours",
      rating: 4.9,
      level: "Advanced",
      description:
        "Master JavaScript concepts including closures, prototypes, async programming, and performance.",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
      category: "Development",
    },
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "John Doe",
      duration: "20 hours",
      rating: 4.8,
      level: "Beginner",
      description:
        "Learn full-stack web development from scratch using modern tools and best practices.",
      image:
        "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
      category: "Development",
    },
    {
      id: 6,
      title: "Python for Data Analysis",
      instructor: "Sophia Martinez",
      duration: "16 hours",
      rating: 4.8,
      level: "Intermediate",
      description:
        "Analyze and visualize data using Python, Pandas, NumPy, and Matplotlib.",
      image:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
      category: "Data Science",
    },
  ];
  return (
    <div className="mt-7 bg-gray-100 py-2 container mx-auto rounded-2xl">
      <div className="flex justify-center items-center gap-2">
        <FaFireAlt className="w-8 h-8 text-red-500"></FaFireAlt>
        <h2 className="text-center text-3xl font-bold">Popular Courses</h2>
      </div>
      <div className="grid grid-cols-3 container mx-auto gap-5 mt-5  rounded-2xl p-4">
        {courses.map((course) => (
          <Card
            key={course.id}
            className="rounded-2xl border
             flex flex-col gap-10"
          >
            <div className="relative w-full aspect-video">
              <Image
                src={course?.image}
                alt={course.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-fill rounded-xl"
              ></Image>
              <Chip className="absolute top-2 right-2">{course.category}</Chip>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <p>
                    <FaChalkboardTeacher className="text-blue-700"></FaChalkboardTeacher>
                  </p>
                  <h3>{course.instructor}</h3>
                </div>
                <div className="flex items-center gap-2"><p>
                    {course.rating}</p>
                    <BiStar className="text-orange-700"></BiStar></div>
              </div>
            </div>
            <Button className="w-full bg-[#1d8386]">Course Details</Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
