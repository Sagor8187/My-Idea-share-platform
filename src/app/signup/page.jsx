"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import Link from "next/link";

export default function SignupPage() {
  const onSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

   const mydata = Object.fromEntries(formData.entries())

 try {
      const { data, error } = await authClient.signUp.email({
    name: mydata.name, 
    email: mydata.email,
    password: mydata.password, // required
    image: mydata.image,
    callbackURL: "http://localhost:3000/",
});
 } catch (err) {
    console.error("error ",err)
 }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-200 dark:from-black dark:to-slate-900 px-4">
      
      <div className="w-full max-w-md rounded-2xl bg-white/80 dark:bg-white/5 backdrop-blur-xl shadow-xl border border-gray-200 dark:border-white/10 p-8">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Create Account
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Sign up to get started
          </p>
        </div>

        <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
          
          {/* Name */}
          <TextField isRequired name="name">
            <Label className="text-sm font-medium">Name</Label>
            <Input
              placeholder="Enter your name"
              className="h-11 rounded-lg"
            />
            <FieldError />
          </TextField>

          {/* Email */}
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
            <Label className="text-sm font-medium">Email</Label>
            <Input
              placeholder="Enter your email"
              className="h-11 rounded-lg"
            />
            <FieldError />
          </TextField>

          {/* Image URL */}
          <TextField isRequired name="image">
            <Label className="text-sm font-medium">Image URL</Label>
            <Input
              placeholder="https://example.com/image.jpg"
              className="h-11 rounded-lg"
            />
            <Description>Profile image link</Description>
            <FieldError />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 6) {
                return "Password must be at least 6 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Must contain 1 uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Must contain 1 number";
              }
              return null;
            }}
          >
            <Label className="text-sm font-medium">Password</Label>
            <Input
              placeholder="Enter your password"
              className="h-11 rounded-lg"
            />
            <Description>
              At least 6 chars, 1 uppercase, 1 number
            </Description>
            <FieldError />
          </TextField>

          {/* Button */}
          <Button
            type="submit"
            className="w-full h-11 rounded-lg btn btn-primary font-semibold shadow-md hover:shadow-lg transition"
          >
            Sign Up
          </Button>
        </Form>

        {/* footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}