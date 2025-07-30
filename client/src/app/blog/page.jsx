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
import { DislikeAction } from "@/redux/action/dislike.action";




export default function BlogPage(){

      const dispatch = useDispatch();
      const {blog,allblog,loading,message,error} = useSelector((state) => state.blog);
      const {admin} = useSelector(state => state.admin);
      const [like,setlike] = useState(true);
      const [dislike,setdislike] = useState(true);
      const { alldislike } = useSelector(state => state.dislike);
      const {allLike} = useSelector(state => state.like);
       
       
      const router = useRouter();
       
      async function handleSessionAdmin() {

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

      async function hundleLikecreate(blogId) {
          setlike(prev => !prev);
       const res =  await dispatch(LikeAction.CreateLike({like,blogId}))
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


      async function handleDislikeCreate(blogId) {
            setdislike(prev => !prev);
           const res = await dispatch(DislikeAction.CreateDislike({dislike,blogId}))

           if(res.payload?.message){
            toast.success(res.payload?.message)
             router.push("/blog")
         }else if(res.payload?.error){
             toast.error(res.payload?.error)
             router.push("/auth/login")
         }
      }

      async function handleGetAllDislike() {
          
         const res = await dispatch(DislikeAction.GetAllDisLike());
      }

      useEffect(() => {
        handleGetAllBlog();
        handleSessionAdmin();
        handleUserSession();
        hunduleGetallLike();
        handleGetAllDislike();
      },[]);

    return(
       <div className="">
            {allblog.map((item) => {
                    const dislikeCount = alldislike.filter(dis => dis.blogId === item._id).length;
                    const allLikeCount =  allLike.filter(like => like.blogId === item._id).length;
                    
                   return(
                   
                     
            <div key={item._id} className=" h-fit w-106 mt-0.5">
                  <Link href={`/blog/${item?._id}`}>
                  <img src={getImageUrl(item?.advator?.[0]?.filename)} alt={item.title} className="border h-90 w-115"/>
                  <h1 className="text-cyan-50 text-2xl p-3">{item?.title}</h1>
                  </Link>
                  <h2 className="text-cyan-200 text-sm pl-2">{item?.createdAt.substring(0, 10)}</h2>
               
                     
                     

                     <div className="flex justify-between">
                       
                         
                          
                          <button className="mb-1 ml-4" onClick={() => hundleLikecreate(item._id)}><ThumbsUp />{allLikeCount}</button>
                          
                         <button className="mb-1 mr-2" onClick={() => handleDislikeCreate(item._id)}><ThumbsDown />{dislikeCount}</button> 
                           <div>
                             <button className="border w-45 h-7 rounded-2xl pr-16" onClick={() => router.push(`/blog/comment/${item._id}`)}>Comment.....</button>
                           </div>
                           
                     </div>

                       
                  
            </div>


                   )

            }
                 
              

             
             )}
       </div>
    )
}                  