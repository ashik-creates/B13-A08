import { Button } from "@heroui/react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center  text-center p-2 gap-3">
        <p className="font-extrabold text-7xl text-[#1d8386]
         ">404</p>
      <h1 className="text-
      4xl text-gray-500 font-bold">This page is not found <br /> in our server!</h1>
      <Link href={"/"}>
        <Button className=" text-white bg-[#1d8386]">Home</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;