"use client"

import { useParams } from "next/navigation"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BlogAction } from "@/redux/action/blog.action";
import { useEffect } from "react";
import { toast } from "sonner";
import { getImageUrl } from "@/lib/image";

export default function BlogDetail(){

     const params = useParams();
     const blogId = params.id;
     const {blog} = useSelector((state) => state.blog);
     const dispatch = useDispatch();
   

       async function hundleGetById() {
               
         const res = await dispatch(BlogAction.BlogGetById(blogId));
          
            if(res.payload?.message){
                toast.success(res.payload?.message);
            }else if(res.payload?.error){
               toast.error(res.payload?.error);
            }
            
                 
       }

       useEffect(() => {
          hundleGetById();
       },[blogId]);

      return(
        <div className="mt-6">
             <img src={getImageUrl(blog?.advator?.[0]?.filename)} alt={blog?.title} className="border h-90 w-130"/>

             <h1 className="text-cyan-100 text-2xl p-2 ">{blog?.title}</h1>
           <p className="text-cyan-50 text-xl p-2">{blog?.content}</p>
        </div>
      )

}