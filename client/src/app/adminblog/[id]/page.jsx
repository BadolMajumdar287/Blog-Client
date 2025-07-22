"use client"
import { useRouter } from "next/navigation"
import { useSelector } from "react-redux"
import { BlogAction } from "@/redux/action/blog.action"
import { useParams } from "next/navigation"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { toast } from "sonner"



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
            <div className="mt-20 text-amber-600">
                  <h1>{blog.title}</h1>
                  <h2>{blog.content}</h2>
            </div>
        )

}