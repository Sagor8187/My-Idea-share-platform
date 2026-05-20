import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { FaHeart, FaReply } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import "animate.css";

export const metadata = {
  title: "My Comment | Next Idea",
  description: "Share your idea present your telent",
};

export default async function MyInteractionPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/my-comment/${session?.user?.id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const output = await res.json();

  return (
    <div className="mt-18 space-y-4 animate__animated animate__slideInUp">
      <h1 className="font-bold text-xl px-6">Comment({output.length}) </h1>
      <hr className="mx-6" />
      <div>
        {output.length > 0 ? (
          <div>
            {output.map((item) => (
              <div key={item._id} className="px-4 pb-4 space-y-3">
                {/* Comment Card */}
                <div
                  className="flex gap-3 p-4 rounded-xl border
          bg-muted/30 hover:bg-muted/50 transition"
                >
                  {/* Avatar */}
                  <div>
                    {item ? (
                      <div>
                        <img
                          className="w-10 h-10 object-contain rounded-full 
            bg-muted "
                          src={item.userimage}
                          alt="profile"
                        />
                      </div>
                    ) : (
                      <FaUserCircle className="text-xl text-muted-foreground" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Top */}
                    <div className="flex flex-col  ">
                      <h4 className="font-semibold text-sm">
                        {item?.userName}
                      </h4>
                      <span className="text-xs text-muted-foreground">
                        {new Date(item.createdAt).toLocaleString()}
                      </span>
                    </div>

                    {/* Text */}
                    <p className="text-sm text-foreground mt-1 leading-relaxed">
                      {item?.post}
                    </p>

                    {/* Actions */}
                    <div className="flex gap-5 mt-3 text-xs text-muted-foreground">
                      <button className="flex items-center gap-1 hover:text-red-500 transition">
                        <FaHeart />
                        Like
                      </button>

                      <button className="flex items-center gap-1 hover:text-blue-500 transition">
                        <FaReply />
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h1 className="text-2xl mx-auto mt-20">No Comment In post </h1>
          </div>
        )}
      </div>
    </div>
  );
}
