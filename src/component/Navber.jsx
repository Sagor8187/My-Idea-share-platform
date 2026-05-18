"use client";
import { usePathname } from "next/navigation";
import { ThemeSwitch } from "./ThemeSwitch";
import Link from "next/link";

export default function Navber() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      <div className="navbar shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link
                  className={`pb-1 border-b-2 transition ${
                    pathname === "/"
                      ? "text-primary border-primary font-bold"
                      : "text-muted-foreground border-transparent"
                  }`}
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`pb-1 border-b-2 transition ${
                    pathname === "/idea"
                      ? "text-primary border-primary font-bold"
                      : "text-muted-foreground border-transparent"
                  }`}
                  href="/idea"
                >
                  Ideas
                </Link>
              </li>
              <li>
                <Link
                  className={`pb-1 border-b-2 transition ${
                    pathname === "/add-idea"
                      ? "text-primary border-primary font-bold"
                      : "text-muted-foreground border-transparent"
                  }`}
                  href="/add-idea"
                >
                  Add Idea
                </Link>
              </li>
              <li>
                <Link
                  className={`pb-1 border-b-2 transition ${
                    pathname === "/my-idea"
                      ? "text-primary border-primary font-bold"
                      : "text-muted-foreground border-transparent"
                  }`}
                  href="/my-idea"
                >
                  My Ideas
                </Link>
              </li>
              <li>
                <Link
                  className={`pb-1 border-b-2 transition ${
                    pathname === "/my-interactions"
                      ? "text-primary border-primary font-bold"
                      : "text-muted-foreground border-transparent"
                  }`}
                  href="/my-interactions"
                >
                  My Interactions
                </Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="hidden md:block btn btn-ghost text-2xl font-bold">
            Next<span className="text-purple-700 text-xl">Idea</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <Link
                className={`pb-1 border-b-2 transition ${
                  pathname === "/"
                    ? "text-primary border-primary font-bold"
                    : "text-muted-foreground border-transparent"
                }`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`pb-1 border-b-2 transition ${
                  pathname === "/idea"
                    ? "text-primary border-primary font-bold"
                    : "text-muted-foreground border-transparent"
                }`}
                href="/idea"
              >
                Ideas
              </Link>
            </li>
            <li>
              <Link
                className={`pb-1 border-b-2 transition ${
                  pathname === "/add-idea"
                    ? "text-primary border-primary font-bold"
                    : "text-muted-foreground border-transparent"
                }`}
                href="/add-idea"
              >
                Add Idea
              </Link>
            </li>
            <li>
              <Link
                className={`pb-1 border-b-2 transition ${
                  pathname === "/my-idea"
                    ? "text-primary border-primary font-bold"
                    : "text-muted-foreground border-transparent"
                }`}
                href="/my-idea"
              >
                My Ideas
              </Link>
            </li>
            <li>
              <Link
                className={`pb-1 border-b-2 transition ${
                  pathname === "/my-interactions"
                    ? "text-primary border-primary font-bold"
                    : "text-muted-foreground border-transparent"
                }`}
                href="/my-interactions"
              >
                My Interactions
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-5">
          <ThemeSwitch></ThemeSwitch>
          <div className="flex justify-center gap-1">
<Link href="/login" className="btn btn-outline btn-primary">Login</Link>
          <Link className="btn btn-outline btn-primary" href="/signup">Signup</Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}
