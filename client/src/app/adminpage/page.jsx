"use client";
import { useEffect,useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AdminAction } from "@/redux/action/admin.action";
import { BlogAction } from "@/redux/action/blog.action";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import Link from "next/link";
import { getImageUrl } from "@/lib/image";
import { Save } from "lucide-react";
import { all } from "axios";


export default function AdminBlogPage(){

    const router = useRouter();
    const dispatch = useDispatch();
    const [title,settitle] = useState("");
    const [content,setcontent] = useState("");
    const [advator,setadvator] = useState(null);
    const {blog,allblog,loading,message,error} = useSelector((state) => state.blog);
    
    
    async function hundleSession() {
        
        const res = await dispatch(AdminAction.Session());
         
        if(res.payload?.message){
           return toast.success(res.payload?.message);
        }else if(res.payload?.error){
            return toast.error(res.payload?.error);
        }
    }

       
    async function handleCreateBlog(){
      
        if(!advator) return toast.error("title is required");
        if(!title) return toast.error("title is required");
        if(!content) return toast.error("content is required");

         const formData = new FormData()

          formData.append('advator', advator);
          formData.append('title', title);
          formData.append('content', content);


       const res = await dispatch(BlogAction.CreateBlog(formData));
      

       if(res.payload?.message){
          toast.success(res.payload?.message);
          settitle("");
          setcontent("");
       }else if(res.payload?.error){
          toast.error(res.payload?.error);
       }


    }


 
    async function handleGetAllBlog() {
        
                 const res = await dispatch(BlogAction.GetAllBlog());
                  
                 if(res.payload?.message){
                    
                    toast.success(res.payload?.message);
                 }else if(res.payload?.error){
                    toast.error(res.payload?.error);
                 }

      }

     
      async function handleUpdateBlog(blogId) {
         
         const res = await dispatch(BlogAction.UpdateBlog({blogId,title,content}));

           if(res.payload?.message){
               toast.success(res.payload?.message);
           }else if(res.payload?.error){
              toast.error(res.payload?.error);
           }

      }


      async function handleDeleteBlog(blogId) {
              
             const res = dispatch(BlogAction.DeleteBlog(blogId))
                   
             if(res.payload?.message){
                toast.success(res.payload?.message)
             }else if(res.payload?.error){
                toast.error(res.payload?.error);
             }
      }
    


    useEffect(() => {
       hundleSession();
       handleGetAllBlog();
    },[])

    return(
        <div className="mt-10">
             <div>
               <input className="border h-8 w-65 ml-1 pt-1 pl-2 text-cyan-600"type="file" onChange={(e) => setadvator(e.target.files[0])}/>
             </div>

             <div className="flex justify-between mr-4">

                  <textarea className="border h-25 w-65 ml-1 pl-1 pt-1 mt-2 text-xl text-cyan-600" placeholder="Title..."
                   id="title" name="title"  value={title} onChange={(e) => settitle(e.target.value)}/>
                  <button className="text-cyan-600" onClick={() => handleCreateBlog()}><Save size={45}/></button>
               
             </div> 

              <div>
                    <textarea className="border h-60 w-96 mt-2 ml-1 text-xl pl-1 pt-1 text-cyan-600" placeholder="Content..."
                    name="content" id="content" value={content} onChange={(e) => setcontent(e.target.value)}/>
              </div>

              {
                allblog.map((item,index) => (
                    <div key={index} className="border bg-cyan-950 mt-10">
                        <Link href={`/adminpage/${item._id}`}>
                        <img src= {getImageUrl(item.advator?.[0].filename)} className="border h-90 w-125"/>
                        <h1 className="text-xl mt-2 pl-2">{item.title}</h1>
                         <p className="text-sm text-gray-400 pt-2 pl-2">{item?.createdAt?.substring(0, 10)}</p>
                        
                        </Link>
                    </div>
                ))
              }

                


        </div>
    )
}