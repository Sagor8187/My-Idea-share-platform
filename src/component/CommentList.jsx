

import { FaRegComment, FaHeart, FaReply } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import DeletePost from "./DeletePost";
export default async function CommentList({id}) {
    const mycomment = await fetch(`http://localhost:5000/comment/${id}`)
    const output =await mycomment.json()

  return (
    <div>
        {output.map(item=>
             <div key={item._id} className="px-4 pb-4 space-y-3">
        {/* Comment Card */}
        <div
          className="flex gap-3 p-4 rounded-xl my-2
          bg-muted/30 hover:bg-muted/50 transition"
        >
          {/* Avatar */}
          <div
            
          >
            {item?<div>
                <img  className="w-10 h-10 object-contain rounded-full 
            bg-muted " src={item.userimage} alt="profile" />
            </div>:<FaUserCircle className="text-xl text-muted-foreground" />}
            
          </div>

          {/* Content */}
          <div className="flex-1">
            {/* Top */}
            <div className="flex flex-col  ">
              <h4 className="font-semibold text-sm">{item?.userName}</h4>
              <span className="text-xs text-muted-foreground">{new Date(item.createdAt).toLocaleString()}</span>
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
          <DeletePost id={item._id}></DeletePost>
        </div>

      
      </div>
        )}
       
    </div>
  )
}
