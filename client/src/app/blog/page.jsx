"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BlogAction } from "@/redux/action/blog.action";
import { AdminAction } from "@/redux/action/admin.action";
import { AuthAction } from "@/redux/action/auth.action";
import { LikeAction } from "@/redux/action/like.action";
import { toast } from "sonner";
import Link from "next/link";
import { getImageUrl } from "@/lib/image";
import { User, ThumbsUp, ThumbsDown } from "lucide-react";


export default function BlogPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { allblog } = useSelector(state => state.blog);
  const { admin } = useSelector(state => state.admin);
  const { allLike } = useSelector(state => state.like);
  const {user} = useSelector(state => state.auth);



  const [likeMap, setLikeMap] = useState({});
  

 
 
 
 
  useEffect(() => {
    dispatch(BlogAction.GetAllBlog());
    dispatch(AdminAction.Session());
    dispatch(AuthAction.Session());
    dispatch(LikeAction.AllLikeGet());
    
  }, [dispatch]);

  const handleLikeCreate = (blogId) => {

    if(!user && ! admin) return router.push("/auth/login");
    const alreadyLiked = likeMap[blogId];
    const newVal = !alreadyLiked;

    dispatch(LikeAction.CreateLike({ like: newVal, blogId }));
    setLikeMap(prev => ({ ...prev, [blogId]: newVal }));
  };

  
  return (
    <div className="p-4">
      {allblog.map((item) => {

        const likeCount = allLike.filter(like => like.blogId === item._id).length;

        return (
          <div key={item._id} className="border mb-5 p-4 rounded-xl bg-gray-800 text-white w-full mt-4">
            <Link href={`/blog/${item._id}`}>
              <img
                src={getImageUrl(item?.advator?.[0]?.filename)}
                alt={item.title}
                className="h-60 w-full object-cover rounded-md"
              />
              <h1 className="text-2xl mt-2">{item?.title}</h1>
            </Link>
            <p className="text-sm text-gray-400 pt-2">{item?.createdAt?.substring(0, 10)}</p>

            <div className="flex justify-between items-center mt-3">
              <button
                onClick={() => handleLikeCreate(item._id)}
                className="flex items-center gap-2 hover:text-green-400"
              >
                <ThumbsUp size={18} /> {likeCount}
              </button>

              

              <button
                onClick={() => router.push(`/blog/comment/${item._id}`)}
                className="bg-cyan-600 text-white px-4 py-1 rounded-full text-sm hover:bg-cyan-700 mr-60"
              >
                Comment...
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
