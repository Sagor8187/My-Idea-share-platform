import React from 'react'
  import "animate.css";
import Link from "next/link";
import { FaRegFrownOpen } from "react-icons/fa";
export default function PageNotfound() {
  return (
    <div>
      


    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4">

      <div className="text-center space-y-6 animate__animated animate__fadeInDown">

        {/* ICON */}
        <div className="flex justify-center animate__animated animate__bounceIn">
          <FaRegFrownOpen className="text-8xl text-yellow-400 drop-shadow-lg" />
        </div>

        {/* 404 TEXT */}
        <h1 className="text-7xl font-extrabold tracking-widest animate__animated animate__pulse animate__infinite">
          404
        </h1>

        {/* MESSAGE */}
        <p className="text-xl text-gray-300 animate__animated animate__fadeInUp">
          Oops! Page Not Found
        </p>

        <p className="text-sm text-gray-400 max-w-md mx-auto animate__animated animate__fadeInUp">
          The page you are looking for might have been removed, renamed, or does not exist.
        </p>

        {/* BUTTON (Next Link) */}
        <div className="mt-4 animate__animated animate__fadeInUp">
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
          >
            Go Home
          </Link>
        </div>

      </div>
    </div>

    </div>
  )
}
