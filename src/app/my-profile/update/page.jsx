"use client";
import { authClient } from "@/lib/auth-client";
import {
  Alert,
  Button,
  Card,
  FieldError,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const UpdateProfilePage = () => {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { data: res, error } = await authClient.updateUser({
      name: data.name,
      image: data.image,
    });
    if (error) {
      setMessage(error.message);
    }
    if (res) {
      setMessage("Update successful");
      router.push("/my-profile");
    }
  };

  return (
    <Card className="max-w-125 mx-auto border py-10 my-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex max-w-96 w-full flex-col gap-4 mx-auto"
      >
        <h1 className="text-center text-2xl font-bold">Update Profile</h1>

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
        {message && (
          <Alert className="bg-blue-100" variant="solid" color="primary" title="Info">
            {message}
          </Alert>
        )}

        <div className="flex items-center gap-3 mt-5">
          <Button type="submit">Update</Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default UpdateProfilePage;
