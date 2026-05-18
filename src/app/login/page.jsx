"use client";


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

export default function LoginPage() {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-200 dark:from-black dark:to-slate-900 px-4">
      
      <div className="w-full max-w-md rounded-2xl bg-white/80 dark:bg-white/5 backdrop-blur-xl shadow-xl border border-gray-200 dark:border-white/10 p-8">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Welcome Back
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Login to continue your journey
          </p>
        </div>

        <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
          
          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
              ) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-sm font-medium">Email</Label>
            <Input
              placeholder="Enter your Email"
              className="h-11 rounded-lg"
            />
            <FieldError />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            minLength={6}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 6) {
                return "Password must be at least 8 characters";
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
            <Description>Must be at least 6 characters with 1 uppercase and 1 number</Description>
            <FieldError />
          </TextField>

          {/* Button group */}
          <div className="flex flex-col gap-3 mt-2">
            
            <Button
              type="submit"
              className="w-full h-11 rounded-lg btn  btn-primary  font-semibold shadow-md hover:shadow-lg transition"
            >
             
              Login
            </Button>

            <Button
  type="reset"
  variant="secondary"
  className="w-full h-11 rounded-lg font-semibold"
>
  Forget Password
</Button>
          </div>
        </Form>

        {/* footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <span className="text-blue-600 cursor-pointer hover:underline">
           <Link href="/signup"> Sign up</Link>
          </span>
        </p>
      </div>
    </div>
  );
}