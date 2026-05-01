import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import { BiStar } from "react-icons/bi";
import { FaChalkboardTeacher } from "react-icons/fa";

const CourseCard = ({course}) => {
  return (
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
          <div className="flex items-center gap-2">
            <p>{course.rating}</p>
            <BiStar className="text-orange-700"></BiStar>
          </div>
        </div>
      </div>
      <Button className="w-full bg-[#1d8386]">Course Details</Button>
    </Card>
  );
};

export default CourseCard;
