"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Alert,
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { BsGoogle } from "react-icons/bs";

const Login = () => {
  const router = useRouter();

  const [message, setMessage] = useState("");
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/";

  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data: res, error } = await authClient.signIn.email({
      email: email, // required
      password: password,
    });
    if (error) {
      setMessage(error.message);
    }
    if (res) {
      setMessage("Login successful");
      router.push(redirectTo);
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <Card className="max-w-125 mx-auto border py-10 my-10">
      <Form
        className="flex max-w-96 w-full flex-col gap-4 mx-auto"
        render={(props) => <form {...props} data-custom="foo" />}
        onSubmit={onSubmit}
      >
        <h1 className="text-center text-2xl font-bold">Login</h1>

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input name="email" placeholder="Enter your email" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input name="password" placeholder="Enter your password" />
          <FieldError />
        </TextField>
        {message && (
          <Alert className="bg-blue-100" variant="solid" color="primary" title="Info">
            {message}
          </Alert>
        )}
        <div className="flex gap-2 mt-4">
          <Button type="submit" className="bg-[#1d8386] text-white">
            <Check />
            Login
          </Button>
          <Button type="reset" variant="secondary" className="text-[#1d8386]">
            Reset
          </Button>
        </div>
      </Form>
      <Button onClick={handleGoogleSignIn} className="max-w-96 w-full mx-auto mt-5" variant="outline">
        <BsGoogle className="text-blue-400" />
        Login with google
      </Button>

      <p className="text-center">
        {"Don't have an account? "}
        <Link href={"/register"}>
          <span className="text-red-500 cursor-pointer bl">register</span>
        </Link>
      </p>
    </Card>
  );
};

export default Login;
