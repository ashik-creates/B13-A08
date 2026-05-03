"use client";

import { useState } from "react";
import NavLink from "@/ui/NavLink";
import Link from "next/link";
import { Avatar, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const pathName = usePathname();
  const router = useRouter();
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleLogOut = async () => {
    await authClient.signOut();
    router.push(pathName);
    toast.warn("Logged out");
  };

  return (
    <div className="shadow-sm bg-white relative">
      <div className="container mx-auto px-4 py-4 flex flex-wrap gap-2 justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-600">
          Skill<span className="text-[#1d8386]">Sphere</span>
        </h1>

        <div className="hidden sm:flex items-center gap-6 font-medium">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/courses">Courses</NavLink>
          <NavLink href="/my-profile">My Profile</NavLink>
        </div>

        <div className="hidden sm:flex items-center gap-4">
          {user ? (
            <>
              <Avatar>
                <Avatar.Image alt={user?.name} src={user?.image} />
                <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <Button onClick={handleLogOut} variant="danger" size="sm">
                LogOut
              </Button>
            </>
          ) : (
            <Link href="/login">
              <Button className="bg-[#1d8386] text-white">Login</Button>
            </Link>
          )}
        </div>

        <button className="sm:hidden text-3xl" onClick={() => setOpen(!open)}>
          <GiHamburgerMenu></GiHamburgerMenu>
        </button>
      </div>

      {open && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-white shadow-md  z-50">
          <div className="flex flex-col p-5 gap-4 font-medium">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link href="/courses" onClick={() => setOpen(false)}>
              Courses
            </Link>

            <Link href="/my-profile" onClick={() => setOpen(false)}>
              My Profile
            </Link>

            <div className="pt-4">
              {user ? (
                <div className="flex flex-wrap gap-3">
                  <div>
                    <Avatar>
                      <Avatar.Image alt={user?.name} src={user?.image} />
                      <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                    </Avatar>
                  </div>
                  <Button onClick={handleLogOut} variant="danger">
                    LogOut
                  </Button>
                </div>
              ) : (
                <Link href="/login" onClick={() => setOpen(false)}>
                  <Button className="bg-[#1d8386]  text-white w-fit">
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
