"use client";
import { useEffect,useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AdminAction } from "@/redux/action/admin.action";
import { BlogAction } from "@/redux/action/blog.action";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import Link from "next/link";

 

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

     
      async function handleUpdateBlog() {
         
        

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
        <div>
                 <div>
                     <input className="border mt-20"type="file" onChange={(e) => setadvator(e.target.files[0])}/>
                 </div>
                  <div className="mt-10">
                    <textarea className="w-full h-fit text-black font-bold text-xl mt-5" 
                    id="title" name="title" placeholder="Title.." value={title} onChange={(e) => settitle(e.target.value)}/>
                  </div>
                  
                  <div>
                    <textarea 
                    className="w-full h-fit text-black font-bold mt-5 text-xl"
                    name="content" id="content" placeholder="Content..." value={content} onChange={(e) => setcontent(e.target.value)}/>
                  </div>
                
                 <div>
                    <button className="border h-fit w-fit rounded-2xl font-bold mt-5" 
                     onClick={handleCreateBlog}>create</button>
                 </div>


                 {
                    allblog.map((item, index) => (
                        
                    <div key={index} className="border w-full h-fit mt-10 bg-cyan-950 ">

                           <div className="border w-65 h-35" >
                                 
                           </div>
                           <Link href={`adminblog/${item._id}`}>
                               
                              <img src={title.advator} alt= {item.title} width= {400} height={400}/>

                               <h1 className="ml-2 text-2xl text-blue-200 mt-10">{item.title}</h1>
                               
                                
                           </Link>
                             <button onClick={() => handleDeleteBlog(item._id)} >Delete</button>
                     </div>
                    ))
                 }
              
        </div>
    )
}