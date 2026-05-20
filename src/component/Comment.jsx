"use client";

import { FaRegComment } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

import toast from "react-hot-toast";


export default function Comment({id}) {
  const { data: session } = authClient.useSession();
  const router = useRouter();


  const submitpost = async (e) => {
     e.preventDefault();
    const {data:tokendata} = await authClient.token()
   
    const formData = new FormData(e.target);
    const post = formData.get("mypost");
    const postdata = {
      postId:id,
      userId:session?.user?.id,
      post,
      createdAt: new Date().toISOString(),
      userName: session?.user?.name,
      userimage: session?.user?.image,
    };

    const res = await fetch(`${process.env.MY_PUBLIC_NEXT_URL}/comment`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization :`Bearer ${tokendata?.token}`
      },
      body: JSON.stringify(postdata),
    });
    const output = await res.json();
    console.log(output)
    if(output){
      toast.success('Add your Comment')
       router.refresh();
    }
    
    console.log(output);
  };

  return (
    <div
      className="w-full max-w-xl mx-auto mt-6 rounded-2xl border
      bg-background text-foreground border-border shadow-md"
    >
      {/* Header */}
      <div className="flex items-center gap-2 px-5 py-4 border-b border-border">
        <FaRegComment className="text-lg" />
        <h2 className="text-lg font-semibold">Comments Here</h2>
      </div>

      {/* Input Box */}
      <div>
        <form className="flex items-center gap-2 p-4" onSubmit={submitpost}>
          <input
            type="text"
            name="mypost"
            placeholder="Write a comment..."
            className="flex-1 px-4 py-2.5 rounded-xl border
          bg-background text-foreground border-border
          focus:outline-none focus:ring-2 focus:ring-primary/50
          transition-all duration-200"
          />

          <button
            type="submit"
            className="px-4 py-2.5 rounded-xl flex items-center gap-2
          bg-primary text-primary-foreground
          hover:opacity-90 active:scale-95 transition"
          >
            <IoMdSend />
            Post
          </button>
        </form>
      </div>

      {/* Comment List */}
      
    </div>
  );
}
