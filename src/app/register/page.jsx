"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Alert,
  Button,
  Card,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsGoogle } from "react-icons/bs";


const RegisterPage = () => {
  const [message, setMessage] = useState("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { data: res, error } = await authClient.signUp.email({
      name: data.name, // required
      email: data.email, // required
      password: data.password, // required
      image: data.image,
      callbackURL: "/login",
    });
    if (error) {
      setMessage(error.message)
    }
    if (res) {
      await authClient.signOut()
      setMessage("Register successful")
      router.push("/login")
    }
  };
  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
        provider: 'google'
    })
  }
  return (
    <Card className="max-w-125 mx-auto border py-10 my-10">
      <Form
        className="flex max-w-96 w-full flex-col gap-4 mx-auto"
        render={(props) => <form {...props} data-custom="foo" />}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center text-2xl font-bold">Register</h1>

        <TextField isRequired className="w-full" name="fullName">
          <Label>Name</Label>
          <Input {...register("name")} placeholder="Enter your name" />
          <FieldError />
        </TextField>

        <TextField isRequired name="image" type="text">
          <Label>Image URL</Label>
          <Input {...register("image")} placeholder="Image URL" />
          <FieldError />
        </TextField>

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
        {message && <Alert className="bg-blue-100" variant="solid" color="primary" title="Info">
                  {message}
                </Alert>}
        <div className="flex gap-2 mt-4">
          <Button type="submit" className="bg-[#1d8386] text-white">
            <Check />
            Register
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
        {"Already have an account? "}
        <Link href={"/login"}>
          <span className="text-blue-500 cursor-pointer bl">Login</span>
        </Link>
      </p>
    </Card>
  );
};

export default RegisterPage;
