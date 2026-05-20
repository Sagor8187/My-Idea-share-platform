import { FaUserCircle } from "react-icons/fa";
import Comment from "@/component/Comment";
import CommentList from "@/component/CommentList";
import 'animate.css';
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
export const metadata = {
  title: "Idea Details | Next Idea",
  description: "Share your idea present your telent",
};
export default async function DetailsPage({ params }) {
  const { id } = await params;

  const {token} = await auth.api.getToken({
    headers: await headers()
  })
  
  const res = await fetch(`http://localhost:5000/idea/${id}`, {
    headers:{
      authorization :`Bearer ${token}`
    }
  });

  const data = await res.json();

  return (
    <div className="animate__animated animate__slideInLeft">
<main className="mt-15 min-h-screen bg-background text-foreground py-10 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-3xl mx-auto bg-content1 rounded-2xl shadow-xl overflow-hidden  border-divider">

        {/* Image */}
        <div className="w-full h-64 sm:h-80 bg-default-200">
          <img
            src={
              data.imageURL ||
              "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb"
            }
            alt={data.ideaTitle}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">

          {/* Category */}
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary tracking-wide uppercase">
              {data.category}
            </span>
          </div>

          {/* Title */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              {data.ideaTitle}
            </h1>

            <p className="text-lg text-default-600 font-medium leading-relaxed">
              {data.shortDescription}
            </p>
          </div>

          {/* Author */}
          <div className="flex items-center space-x-3 bg-content2 p-3 rounded-xl w-fit  border-divider">

           <div className="flex items-center gap-2 mt-2">
                                                <div className="w-8 h-8 rounded-full bg-default-200 text-default-600 font-semibold text-xs flex items-center justify-center border border-divider overflow-hidden select-none">
                                                  {data?.userimage ? (
                                <img
                                  src={data.userimage}
                                  alt="profile"
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <FaUserCircle className="text-3xl text-muted-foreground" />
                              )}
                                                </div>
                                               <div className="flex flex-col">
                                                 <span className="text-xs font-medium text-default-600">
                                                  {data?.userName}
                                                </span>
                                                <span className="text-xs font-medium text-default-600">
                                                  {new Date(data?.createdAt).toLocaleString()}
                                                 
                                                </span>
                                               </div>
                                              </div>
          </div>

          {/* Description */}
          <div className="text-default-700 leading-relaxed text-base border-l-4 border-primary pl-4 py-2 bg-primary/5 rounded-r-lg">
            {data.detailedDescription}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            <span
                
                className="text-xs font-medium bg-default-100 text-default-700 px-3 py-1 rounded-md border border-divider hover:bg-default-200 transition-colors"
              >
                {data?.tags}
              </span>
          </div>

          {/* Divider */}
          <hr className="border-divider my-6" />

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-content2 p-5 rounded-xl border border-divider">

            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-default-400 mb-1">
                Target Audience
              </span>

              <p className="text-foreground font-semibold text-base">
                {data.targetAudience}
              </p>
            </div>

            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-default-400 mb-1">
                Estimated Budget
              </span>

              <p className="text-primary font-bold text-xl">
                ${data.estimatedBudget?.toLocaleString()}
              </p>
            </div>

          </div>

          {/* Problem & Solution */}
          <div className="space-y-5 pt-2">

            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-danger mb-1">
                Problem Statement
              </span>

              <p className="text-default-700 text-sm sm:text-base leading-relaxed bg-danger/10 p-4 rounded-xl border border-danger/20">
                {data.problemStatement}
              </p>
            </div>

            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-success mb-1">
                Proposed Solution
              </span>

              <p className="text-default-700 text-sm sm:text-base leading-relaxed bg-success/10 p-4 rounded-xl border border-success/20">
                {data.proposedSolution}
              </p>
            </div>

          </div>

        </div>
      </div>
    </main>
    <div>
      <Comment id={ id }></Comment>
      <div className="w-full max-w-xl mx-auto mt-6 rounded-2xl border
      bg-background text-foreground border-border shadow-md"
    >
  <CommentList id={ id }></CommentList>
      </div>
    
    </div>
    </div>
    
  );
}