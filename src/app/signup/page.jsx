"use client";
import 'animate.css';
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
  const googlesignIn = async () => {
    await authClient.signIn.social({
    provider: "google",
  });
};

  return (
    <div className="mt-5 md:mt-10 animate__animated animate__backInUp min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-200 dark:from-black dark:to-slate-900 px-4">
      
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
          <TextField  isRequired name="name">
            <Label className="text-sm font-medium">Name</Label>
            <Input
              placeholder="Enter your name"
              className="h-11 w-full rounded-lg bg-background text-foreground"
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
              className="h-11 w-full rounded-lg bg-background text-foreground"
            />
            <FieldError />
          </TextField>

          {/* Image URL */}
          <TextField isRequired name="image">
            <Label className="text-sm font-medium">Image URL</Label>
            <Input
              placeholder="https://example.com/image.jpg"
              className="h-11 w-full rounded-lg bg-background text-foreground"
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
              className="h-11 w-full rounded-lg bg-background text-foreground"
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
        <p className='text-center p-1'>
          or
        </p>
            <button onClick={googlesignIn} className="btn bg-background text-foreground w-full mt-2 shadow">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
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