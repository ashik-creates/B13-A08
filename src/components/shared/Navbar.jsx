"use client";
import NavLink from "@/ui/NavLink";
import Link from "next/link";

import { Avatar, Button} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Navbar = () => {
  const pathName = usePathname()
  const router = useRouter()
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleLogOut = async () => {
    await authClient.signOut();
    router.push(pathName);
    toast.warn("Logged out")
    
  };
  return (
    <div className="shadow-sm bg-white">
      <div className="flex justify-between items-center py-5 container mx-auto bg-white">
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
            <NavLink href={"/my-profile"}>
              My Profile
            </NavLink>
          </p>
        </div>
        {user ? (
          <div className="flex justify-center items-center gap-4">
            <Avatar>
              <Avatar.Image alt={user?.name} src={user?.image} />
              <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
            </Avatar>
            <Button onClick={handleLogOut} variant="danger" size="sm">
              LogOut
            </Button>
          </div>
        ) : (
          <Link href={"/login"}>
            <Button className="bg-[#1d8386]">Login</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
