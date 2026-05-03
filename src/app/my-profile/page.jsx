"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Card } from "@heroui/react";
import Link from "next/link";


const MyProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  if(!user) return <p className="flex justify-center items-center p-20 container mx-auto bg-white rounded-2xl text-2xl text-gray-500 my-5">Not logged in</p>
  return (
    <div>
      <Card className="max-w-96 mx-auto flex flex-col items-center border my-10">
        <Avatar className="h-20 w-20">
          <Avatar.Image
            alt="John Doe"
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
        </Avatar>

        <h2 className="text-xl font-bold">{user?.name}</h2>
        <p className="text-muted">{user?.email}</p>
        <Link href={"/my-profile/update?callbackUrl=/my-profile"}><Button className="mt-5">Update Profile</Button></Link>
      </Card>
    </div>
  );
};

export default MyProfilePage;