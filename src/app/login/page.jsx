import Login from "@/components/login/Login";
import { Suspense } from "react";

const LoginPage = () => {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <Login></Login>
    </Suspense>
  );
};

export default LoginPage;