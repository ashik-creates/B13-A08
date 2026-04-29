import NavLink from "@/ui/NavLink";
import Link from "next/link";

import { Button } from "@heroui/react";

const Navbar = () => {
  return (
    <div className="shadow-sm">
      <div className="flex justify-between items-center py-5 container mx-auto">
        <h1 className="text-2xl font-bold text-gray-600">
          Skill<span className="font-bold text-[#1d8386]">Sphere</span>
        </h1>
        <div className="flex items-center gap-3 font-medium">
          <p>
            <NavLink href={"/"}>Home</NavLink>
          </p>
          <p>
            <NavLink href={"/courses"}>Courses</NavLink>
          </p>
          <p>
            <NavLink href={"/my-profile"}>My Profile</NavLink>
          </p>
        </div>
        <Link href={"/login"}>
          <Button className="bg-[#1d8386]">Login</Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
