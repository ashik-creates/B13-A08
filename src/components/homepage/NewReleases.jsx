import Link from "next/link";
import { Card } from "@heroui/react";
import { getAllData } from "@/lib/api";
import Image from "next/image";
import { Star } from "@gravity-ui/icons";

const NewReleases = async () => {
  const courses = await getAllData();
  const lastThree = courses.slice(-3);

  return (
    <div className="max-w-7xl mx-auto px-4 my-10">
      <h2 className="text-2xl text-center md:text-3xl font-bold mb-8">
        New Releases
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {lastThree.map((course) => (
          <Link key={course.id} href={`/courses/${course.id}`}>
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border overflow-hidden">
              <Image
                src={course.image}
                alt={course.title}
                width={300}
                height={300}
                className="h-48 w-full object-cover rounded-2xl"
              />
              <div className="p-4 space-y-2">
                <h3 className="font-semibold line-clamp-2">
                  {course.title}
                </h3>
                <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                  {course.instructor}
                </p>
                <p className="flex items-center gap-2 font-bold text-[#1d8386]">
                  <Star></Star> {course.rating}
                </p>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewReleases;