"use client";

import { useState } from "react";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import 'animate.css';
export default function IdeaClient({ initialData }) {
  const [ideas, setIdeas] = useState(initialData);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");


  const handleSearch = async () => {
    let url = `${process.env.MY_PUBLIC_NEXT_URL}/idea?`;

    if (search) url += `search=${search}&`;
    if (category) url += `category=${category}`;

    const res = await fetch(url);
    const data = await res.json();

    setIdeas(data);
  };

 
  return (
    <div className="animate__animated animate__zoomIn mt-15 container mx-auto px-4 py-8">

      {/* 🔍 SEARCH UI */}
      <div className="flex gap-3 mb-6">

        {/* search input */}
        <input
          className="border p-2 w-full"
          placeholder="Search idea title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* category filter */}
        <select
          className="border p-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All</option>
          <option value="tech">Tech</option>
          <option value="ai">AI</option>
          <option value="education">Education</option>
        </select>

        
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>

        
      </div>

      {/* 📌 CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

       {ideas.map((item) => (
  <div
    key={item._id}
    className="flex flex-col bg-background rounded-md shadow-md overflow-hidden max-w-[400px] w-full transition-transform duration-200 hover:scale-[1.01]"
  >
    {/* IMAGE */}
    <div className="relative h-48 w-full overflow-hidden bg-muted">
      <img
        src={
          item.imageURL ||
          "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600"
        }
        alt={item.ideaTitle || "Project Image"}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>

    {/* CONTENT */}
    <div className="flex flex-col flex-grow p-5 gap-3">

      {/* CATEGORY */}
      <div>
        <span className="inline-flex items-center justify-center px-2.5 py-1 text-xs font-medium rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
          {item.category || "Tech"}
        </span>
      </div>

      {/* TITLE + DESC */}
      <div className="flex flex-col gap-2 flex-grow">
        <h3 className="text-xl font-bold text-foreground line-clamp-1">
          {item.ideaTitle || "Untitled Project"}
        </h3>

        <p className="text-sm text-default-500 line-clamp-2 leading-relaxed">
          {item.shortDescription || "No description provided for this project idea."}
        </p>
      </div>

      {/* USER INFO */}
      <div className="flex items-center gap-2 mt-2">
        <div className="w-8 h-8 rounded-full bg-default-200 flex items-center justify-center overflow-hidden">
          {item?.userimage ? (
            <img
              src={item.userimage}
              alt="profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <FaUserCircle className="text-2xl text-gray-500" />
          )}
        </div>

        <div className="flex flex-col">
          <span className="text-xs font-medium text-default-600">
            {item?.userName || "Anonymous"}
          </span>

          <span className="text-xs text-default-500">
            {item.createdAt
              ? new Date(item.createdAt).toLocaleString()
              : "No date"}
          </span>
        </div>
      </div>

     

      {/* VIEW BUTTON */}
      <div className="mt-2">
        <Link href={`/idea/${item._id}`}>
          <button className="w-full py-2.5 px-4 rounded-md bg-primary text-primary-foreground font-medium text-sm transition-all hover:opacity-90 active:scale-[0.98] shadow-sm">
            View Details
          </button>
        </Link>
      </div>

    </div>
  </div>
))}
      </div>
    </div>
  );
}