import IdeaDelete from "@/component/IdeaDelete";
import IdeaUpdate from "@/component/IdeaUpdate";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

export default async function MyIdeaPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const res = await fetch(`http://localhost:5000/my-idea/${session?.user?.id}`);
  const ideas = await res.json();
  console.log(ideas);

  return (
    <div>
      <div>
        <div className="mt-15 container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {ideas.map((item) => (
              <div
                key={item._id}
                className="flex flex-col bg-background rounded-md shadow-md rounded-large shadow-medium overflow-hidden max-w-[400px] w-full transition-transform duration-200 hover:scale-[1.01]"
              >
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  <img
                    src={
                      item.imageURL ||
                      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600"
                    }
                    alt={item.userName || "Project Image"}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="flex flex-col flex-grow p-5 gap-3">
                  <div>
                    <span className="inline-flex items-center justify-center px-2.5 py-1 text-xs font-medium rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                      {item.category || "Tech"}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2 flex-grow">
                    <h3 className="text-xl font-bold text-foreground line-clamp-1">
                      {item.ideaTitle || "Untitled Project"}
                    </h3>
                    <p className="text-sm text-default-500 dark:text-default-400 line-clamp-2 leading-relaxed">
                      {item.shortDescription ||
                        "No description provided for this project idea."}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-8 h-8 rounded-full bg-default-200 text-default-600 font-semibold text-xs flex items-center justify-center border border-divider overflow-hidden select-none">
                      {item?.userimage ? (
                        <img
                          src={item.userimage}
                          alt="profile"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <FaUserCircle className="text-3xl text-muted-foreground" />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-medium text-default-600">
                        {item?.userName}
                      </span>
                      <span className="text-xs font-medium text-default-600">
                        {new Date(item.createdAt).toLocaleString()}
                      </span>
                    </div>
                  </div>
                      <div className="flex gap-2">
                        <IdeaDelete item={item}></IdeaDelete>
                        <IdeaUpdate item={item}></IdeaUpdate>
                      </div>
                  <div className="mt-2">
                    <Link href={`/idea/${item._id}`}>
                      <button className="w-full py-2.5 px-4 rounded-medium bg-primary text-primary-foreground font-medium text-sm transition-all duration-200 hover:opacity-90 active:scale-[0.98] shadow-sm">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
