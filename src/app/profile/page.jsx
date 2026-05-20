"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import "animate.css";
import Modalform from "@/component/Modalform";
import { FaSignOutAlt, FaUser } from "react-icons/fa";

export default function ProfileDashboard() {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  if (session === undefined) {
    return (
      <div className="flex justify-center items-center h-screen bg-background text-foreground">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen bg-background text-foreground">
        <h1 className="text-xl font-bold">Please login first</h1>
      </div>
    );
  }

  return (
    <div className="mt-8 md:mt-15 min-h-screen flex flex-col md:flex-row bg-background text-foreground">

      {/* Sidebar */}
      <aside className="w-64 bg-background border-r border-default-200 p-5 animate__animated animate__fadeInLeft">

        <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
          <FaUser /> Profile
        </h2>

        <ul className="space-y-3">
          <li className="flex w-full font-bold items-center justify-center">
            <Modalform />
          </li>
        </ul>

        <button
          onClick={() => authClient.signOut()}
          className="mt-10 w-full bg-primary text-white rounded-md py-2 flex items-center justify-center gap-2 hover:opacity-90 transition"
        >
          <FaSignOutAlt /> Logout
        </button>

      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-background text-foreground">

        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6 animate__animated animate__fadeInDown">

          <h1 className="text-2xl font-bold text-foreground">
            My Profile
          </h1>

          <Link
            href="/"
            className="text-primary hover:underline font-bold"
          >
            Back to Home
          </Link>

        </div>

        {/* Profile Section */}
        <div className="bg-background border border-default-200 p-6 rounded-xl shadow-md animate__animated animate__fadeInUp">

          <div className="flex items-center gap-6">

            <img
              src={user.image}
              alt="profile"
              className="w-20 h-20 rounded-full border-2 border-primary hover:scale-110 transition"
            />

            <div>
              <h2 className="text-xl font-bold text-foreground">
                {user.name}
              </h2>

              <p className="text-foreground/70">
                {user.email}
              </p>
            </div>

          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">

            <div className="bg-background border border-default-200 p-4 rounded hover:scale-105 transition">
              <p className="text-foreground/60">User ID</p>
              <p className="font-semibold text-foreground">{user.id}</p>
            </div>

            <div className="bg-background border border-default-200 p-4 rounded hover:scale-105 transition">
              <p className="text-foreground/60">Email Verified</p>
              <p className={`font-semibold ${user.emailVerified ? "text-success" : "text-danger"}`}>
                {user.emailVerified ? "Yes" : "No"}
              </p>
            </div>

            <div className="bg-background border border-default-200 p-4 rounded hover:scale-105 transition">
              <p className="text-foreground/60">Account Created</p>
              <p className="font-semibold text-foreground">
                {new Date(user.createdAt).toLocaleDateString()}
              </p>
            </div>

            <div className="bg-background border border-default-200 p-4 rounded hover:scale-105 transition">
              <p className="text-foreground/60">Last Update</p>
              <p className="font-semibold text-foreground">
                {new Date(user.updatedAt).toLocaleDateString()}
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}