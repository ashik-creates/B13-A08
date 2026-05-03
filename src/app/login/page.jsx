import Login from "@/components/login/Login";
import { Spinner } from "@heroui/react";
import { Suspense } from "react";

const LoginPage = () => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-[50vh]">
          <Spinner></Spinner>
        </div>
      }
    >
      <Login></Login>
    </Suspense>
  );
};

export default LoginPage;
