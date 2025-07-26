"use client";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { BlogAction } from "@/redux/action/blog.action";
import { toast } from "sonner";
import { useEffect } from "react";
import Link from "next/link";
import { getImageUrl } from "@/lib/image";




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
       <div className="mt-9">
            {allblog.map((item, index) => (

            <div key={index} className="border h-fit w-106 mt-0.5">
                  <Link href={`/blog/${item?._id}`}>
                  <img src={getImageUrl(item?.advator?.[0]?.filename)} alt={item.title} className="border h-90 w-115"/>
                  <h1 className="text-cyan-50 text-2xl p-3">{item?.title}</h1>
                  <h2 className="text-cyan-200 text-sm pl-2">{item?.createdAt.substring(0, 10)}</h2>
                  </Link>
                  
            </div>
             
             ))}
       </div>
    )
}                  