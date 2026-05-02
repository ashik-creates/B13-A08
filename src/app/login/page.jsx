import Login from "@/components/login/Login";
import { Suspense } from "react";

const LoginPage = () => {
  return (
    <Suspense>
      <Login></Login>
    </Suspense>
  );
};

export default LoginPage;