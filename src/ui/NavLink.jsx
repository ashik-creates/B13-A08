"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children, className }) => {
  const pathName = usePathname();
  const isActive = pathName === href;
  return (
    <Link href={href} className={`py-1 ${isActive ? "border-b-2 border-[#681ac0]":""}
    ${className}`}>
      {children}
    </Link>
  );
};

export default NavLink;
