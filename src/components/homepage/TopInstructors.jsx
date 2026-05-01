import { Star } from "@gravity-ui/icons";
import { Card } from "@heroui/react";
import Image from "next/image";

const TopInstructors = () => {
  const instructors = [
    {
      id: 1,
      name: "Dr. Angela Martin",
      expertise: "Full-Stack Web Development",
      students: "12,500+ Students",
      rating: 4.9,
      image:
        "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg",
    },
    {
      id: 2,
      name: "Michael Roberts",
      expertise: "UI/UX & Product Design",
      students: "9,200+ Students",
      rating: 4.8,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    },
    {
      id: 3,
      name: "Sophia Lee",
      expertise: "Data Science & Python",
      students: "15,000+ Students",
      rating: 4.9,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    },
    {
      id: 4,
      name: "Daniel Thompson",
      expertise: "Cybersecurity & Networking",
      students: "7,800+ Students",
      rating: 4.7,
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    },
  ];
  return (
    <div className="my-10 container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">
         Top Instructors
      </h2>

      <div className="grid grid-cols-4 gap-5">
        {instructors.map((ins) => (
          <Card
            key={ins.id}
            className="p-5 space-y-4 shadow-md border h-full border-gray-200 bg-linear-to-r from-blue-300 to-purple-300  text-center"
          >
            <Image
              src={ins.image}
              alt={ins.name}
              width={120}
              height={120}
              className="mx-auto rounded-full object-cover h-28 w-28"
            />

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">{ins.name}</h3>
              <p className="text-sm text-gray-700">{ins.expertise}</p>
            </div>

            <div className="text-sm flex justify-center gap-7">
              <div className="flex items-center gap-2">
                <Star className="text-orange-500"></Star>
                <p>{ins.rating}</p>
                
              </div>
              <span>{ins.students}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TopInstructors;
