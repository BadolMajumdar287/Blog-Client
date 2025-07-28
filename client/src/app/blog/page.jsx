"use client";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { BlogAction } from "@/redux/action/blog.action";
import { AdminAction } from "@/redux/action/admin.action";
import { toast } from "sonner";
import { useEffect,useState } from "react";
import Link from "next/link";
import { getImageUrl } from "@/lib/image";
import { User,ThumbsUp,ThumbsDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { AuthAction } from "@/redux/action/auth.action";
import { LikeAction } from "@/redux/action/like.action";




export default function BlogPage(){

      const dispatch = useDispatch();
      const {blog,allblog,loading,message,error} = useSelector((state) => state.blog);
      const {admin} = useSelector(state => state.admin);
      const [like,setlike] = useState(true);
      const [dislike,setdislike] = useState(0);
      const [comment,setcomment] = useState("");
      const {allLike} = useSelector(state => state.like);
     
       
      const router = useRouter();
       
      async function handleSession() {

         const res = await dispatch(AdminAction.Session());
           
         if(res.payload?.message){
            toast.success(res.payload?.message)
         }else if(res.payload?.error){
             toast.error(res.payload?.error)
         }
         
      }

      async function handleUserSession() {
         
       const res =  await dispatch(AuthAction.Session());
        
      

      }

      async function handleGetAllBlog() {
        
                 const res = await dispatch(BlogAction.GetAllBlog());
                  
                 if(res.payload?.message){
                    
                    toast.success(res.payload?.message);
                      router.push("/blog")
                 }else if(res.payload?.error){
                    toast.error(res.payload?.error);
                 }

      }

      async function hundleLikecreate() {
          setlike(prev => !prev);
       const res =  await dispatch(LikeAction.CreateLike({like}))
       if(res.payload?.message){
            toast.success(res.payload?.message)
             router.push("/blog")
         }else if(res.payload?.error){
             toast.error(res.payload?.error)
             router.push("/auth/login")
         }
      }


      async function hunduleGetallLike() {

         const res = await dispatch(LikeAction.AllLikeGet());
         
      }

      useEffect(() => {
        handleGetAllBlog();
        handleSession()
        handleUserSession();
        hunduleGetallLike()
      },[]);

    return(
       <div className="">
            {allblog.map((item, index) => (

            <div key={index} className=" h-fit w-106 mt-0.5">
                  <Link href={`/blog/${item?._id}`}>
                  <img src={getImageUrl(item?.advator?.[0]?.filename)} alt={item.title} className="border h-90 w-115"/>
                  <h1 className="text-cyan-50 text-2xl p-3">{item?.title}</h1>
                  
                  
                  </Link>
                  <h2 className="text-cyan-200 text-sm pl-2">{item?.createdAt.substring(0, 10)}</h2>
               
                     
                     

                     <div className="flex justify-between">
                           <button className="mb-1 ml-4" onClick={hundleLikecreate}><ThumbsUp />{allLike.length}</button>
                           <button className="mb-1 mr-2"><ThumbsDown />{dislike}</button>
                           <div>
                             <button className="border w-45 h-7 rounded-2xl pr-16" onClick={() => router.push("/comment")}>Comment.....</button>
                           </div>
                           
                     </div>

                       
                  
            </div>
             
             ))}
       </div>
    )
}                  