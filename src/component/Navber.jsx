"use client";
import { usePathname } from "next/navigation";
import { ThemeSwitch } from "./ThemeSwitch";
import Link from "next/link";
import { authClient } from "../lib/auth-client";

export default function Navber() {
  const pathname = usePathname();
  
  const { data: session } = authClient.useSession()
   const handlesignout = async ()=>{
    await authClient.signOut();
  }
  
  return (
    <div  className="fixed top-0 left-0 w-full z-50 bg-background/70 backdrop-blur-md shadow border-divider">
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
  tabIndex={0}
  className="menu menu-sm dropdown-content bg-white text-gray-800 dark:bg-gray-900 dark:text-white rounded-box z-50 mt-3 w-52 p-2 shadow-lg border border-gray-200 dark:border-gray-700"
>
  <li>
    <Link
      className={`pb-1 border-b-2 transition ${
        pathname === "/"
          ? "text-blue-600 border-blue-600 font-semibold"
          : "text-gray-700 dark:text-gray-300 border-transparent"
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
          ? "text-blue-600 border-blue-600 font-semibold"
          : "text-gray-700 dark:text-gray-300 border-transparent"
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
          ? "text-blue-600 border-blue-600 font-semibold"
          : "text-gray-700 dark:text-gray-300 border-transparent"
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
          ? "text-blue-600 border-blue-600 font-semibold"
          : "text-gray-700 dark:text-gray-300 border-transparent"
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
          ? "text-blue-600 border-blue-600 font-semibold"
          : "text-gray-700 dark:text-gray-300 border-transparent"
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
          {session ?<div>
    <div className="dropdown dropdown-end">
  <div
    tabIndex={0}
    role="button"
    className="btn btn-ghost btn-circle avatar"
  >
    <div className="w-10 rounded-full">
      <img
        alt="profile"
        src={session?.user?.image || "/default-avatar.png"}
      />
    </div>
  </div>

  <ul
    tabIndex={0}
    className="menu menu-sm dropdown-content bg-white dark:bg-base-100 text-black dark:text-base-content rounded-box z-50 mt-3 w-52 p-2 shadow-lg"
  >
    <li>
      <a className="justify-between">
        Profile <span className="badge">New</span>
      </a>
    </li>

    <li>
      <button onClick={handlesignout}>Logout</button>
      
    </li>
  </ul>
</div>

          </div>:<div className="flex justify-center gap-1">
<Link href="/login" className="btn  btn-outline btn-primary">Login</Link>
          <Link className="btn btn-outline btn-primary" href="/signup">Signup</Link>
          </div>}
          
        </div>
      </div>
    </div>
  );
}
