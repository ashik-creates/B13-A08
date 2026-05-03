import Image from "next/image";
import banner from "@/assets/banner.jpg";
import { Button } from "@heroui/react";

const Banner = () => {
  return (
    <div className="relative  flex justify-center gap-3 items-center container mx-auto text-white  h-[60vh] sm:h-[70vh] md:h-[80vh] rounded-2xl p-4 bg-black/50">
      <Image
        src={banner}
        alt="SkillSphere Banner"
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className=" object-cover h-full w-full  -z-10 rounded-2xl"
      />
      <div>
        <h2 className="max-[300px]:text-2xl text-3xl min-[450px]:text-5xl md:text-7xl font-bold text-center">
          Upgrade Your <span className="text-[#f79744]">Skills</span> <br />{" "}
          Master the <span className="text-[#f79744]">Future</span>
        </h2>
        <p className="text-center mt-3 max-[300px]:text-sm  text-white/80 max-w[80%]">
          Learn directly from industry experts through hands-on projects and{" "}
          <br />
          professional-grade mentorship tailored to your career goals.
        </p>
        <div className="flex flex-wrap items-center gap-2 mt-3 justify-center">
          <Button className="bg-[#649a9c]">Get Started</Button>
          <Button variant="outline" className="text-white">
            Find Course
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
