"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Card } from "@heroui/react";
import Image from "next/image";
import { Star } from "@gravity-ui/icons";

const NewReleaseCard = ({ course }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.03 }}
    >
      <Link href={`/courses/${course.id}`}>
        <Card className="border p-0 overflow-hidden shadow-s">
          <motion.div
            className="p-4"
            transition={{ duration: 0.4 }}
            whileHover={{ backgroundColor: "#a7e3e4",  }}
          >
            <Image
              src={course.image}
              alt={course.title}
              height={300}
              width={300}
              className="h-48 rounded-2xl w-full object-cover"
            />

            <div className="p-4 space-y-2">
              <h3 className="font-semibold">{course.title}</h3>

              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-sm text-gray-500">{course.instructor}</p>

                <p className="font-bold flex items-center gap-2 text-[#1d8386]">
                  <Star></Star> ${course.rating}
                </p>
              </div>
            </div>
          </motion.div>
        </Card>
      </Link>
    </motion.div>
  );
};

export default NewReleaseCard;
