"use client";

import { Button, Input } from "@heroui/react";
import Link from "next/link";

export default function ForgotPassword() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    console.log(email);

    alert("Password reset link sent!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background text-foreground">

      {/* Card */}
      <div className="w-full max-w-md bg-background border border-default-200 rounded-2xl p-6 sm:p-8 shadow-md">

        {/* Header */}
        <div className="text-center mb-6">

          <h1 className="text-2xl font-bold text-foreground">
            Forgot Password
          </h1>

          <p className="text-sm text-foreground/70 mt-2">
            Enter your email address and we’ll send you a password reset link.
          </p>

        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            name="email"
            type="email"
            label="Email Address"
            placeholder="Enter your email"
            required
            className="p-2  bg-background text-foreground w-full"
          />

          <Button
            type="submit"
            color="primary"
            className="w-full font-medium"
          >
            Send Reset Link
          </Button>

        </form>

        {/* Footer */}
        <p className="text-center text-sm text-foreground/70 mt-6">
          Remember your password?{" "}
          <span className="text-primary font-medium cursor-pointer hover:underline">
            <Link href="/login">Login</Link>
          </span>
        </p>

      </div>
    </div>
  );
}