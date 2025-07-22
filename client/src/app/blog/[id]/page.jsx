"use client"

import { useParams } from "next/navigation"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BlogAction } from "@/redux/action/blog.action";
import { useEffect } from "react";
import { toast } from "sonner";

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
        <div className="text-amber-400 mt-10">
             <h1>{blog.title}</h1>
           <p>{blog.content}</p>
        </div>
      )

}