"use client"
import { useRouter } from "next/navigation"
import { useSelector } from "react-redux"
import { BlogAction } from "@/redux/action/blog.action"
import { useParams } from "next/navigation"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { toast } from "sonner"
import { getImageUrl } from "@/lib/image"



export default function AdminBlogDetail(){

       const params = useParams();
       const blogId = params.id;
       const dispatch = useDispatch();
       const {blog} = useSelector((state) => state.blog);
       
       

       async function handleGetById() {
            
        const res = await dispatch(BlogAction.BlogGetById(blogId));

          if(res.payload?.message){
              toast.success(res.payload?.message);
          }else if(res.payload?.error){
              toast.error(res.payload?.error);
          }
                
       }

       

       useEffect(() => {
         handleGetById();
       },[blogId])

        return(
            <div className="mt-10">
                  <img src={getImageUrl(blog?.advator?.[0]?.filename)} className="h-90 w-112"/>
                  <h1 className="mt-3 text-2xl text-cyan-100">{blog.title}</h1>
                  <h2 className="mt-5 text-xl text-cyan-50 ">{blog.content}</h2>
            </div>
        )

}