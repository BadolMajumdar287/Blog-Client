"use client";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { BlogAction } from "@/redux/action/blog.action";
import { toast } from "sonner";
import { useEffect } from "react";
import Link from "next/link";




export default function BlogPage(){

      const dispatch = useDispatch();
      const {blog,allblog,loading,message,error} = useSelector((state) => state.blog);

   
       

      async function handleGetAllBlog() {
        
                 const res = await dispatch(BlogAction.GetAllBlog());
                  
                 if(res.payload?.message){
                    
                    toast.success(res.payload?.message);
                 }else if(res.payload?.error){
                    toast.error(res.payload?.error);
                 }

      }

      useEffect(() => {
        handleGetAllBlog();
      },[]);

    return(
        <div>
            
               {
                allblog.map((item, index) => (

                    <div key={index} className="border w-full h-fit mt-10 bg-cyan-950 ">

                           <div className="border w-65 h-35" >
                                 
                           </div>
                            <Link href={`blog/${item._id}`}>
                               <p className="ml-2 text-2xl text-blue-200">{item.title}</p>
                            </Link>
                             
                      </div>
                ))
               }


        </div>
    )
}