"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
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
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { BsGoogle } from "react-icons/bs";


const LoginPage = () => {
  const searchParams = useSearchParams()

  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
      const { data: res, error } = await authClient.signIn.email({
        email: data.email, // required
        password: data.password, 
        callbackURL: callbackUrl,
      });
      if (error) {
        alert(error.message);
      }
      if (res) {
        alert("Login successful");
        
      }
    };
  return (
    <Card className="max-w-125 mx-auto border py-10 mt-10">
      <Form
        className="flex max-w-96 w-full flex-col gap-4 mx-auto"
        render={(props) => <form {...props} data-custom="foo" />}
        onSubmit={handleSubmit(onSubmit)}
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
          <Input {...register("email")} placeholder="Enter your email" />
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
          <Input {...register("password")} placeholder="Enter your password" />
          <FieldError />
        </TextField>
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
      <Button className="max-w-96 w-full mx-auto mt-5" variant="outline">
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

export default LoginPage;
