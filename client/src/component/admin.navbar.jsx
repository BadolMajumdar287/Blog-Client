"use client"
import { useRouter } from "next/navigation"
import { EllipsisVertical,LogOut,User,Plus,Trash2,Pen } from "lucide-react"
import { AdminAction } from "@/redux/action/admin.action";
import { BlogAction } from "@/redux/action/blog.action";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { useState } from "react"





export default function AdminNavbar(){
      const router = useRouter();
       const dispatch = useDispatch();
       const [showLogout,setshowLogout] = useState(false);
       const [deleteBlog,setdeletBlog] = useState("");
       const [editBlog,seteditBlog] = useState("");
       const {admin} = useSelector(state => state.admin);
       const {blog} = useSelector(state => state.blog);
       const [showAdminName,setshowAdminName] = useState(false);
      
       async function hundleDeleteBlog(BlogId) {
             const res = await dispatch(BlogAction.DeleteBlog(BlogId));

            if(res.payload?.message){
              toast.success(res.payload?.message);
              setdeletBlog(null)
            }else if(res.payload?.error){
              toast.error(res.payload?.error);
            }
       }

    
       
       async function handleLogout() {
            
        const res = await dispatch(AdminAction.Logout());

          if(res.payload?.message){
            toast.success(res.payload?.message);
            router.push("/admin/login")
          }else if(res.payload?.error){
            toast.error(res.payload?.error);
          }

       }
    return(
      <div>
          <div className="fixed top-0 left-0 right-0 h-9 w-97 bg-cyan-900 flex justify-between items-center">
                <div className="flex gap-3 ml-2 text-cyan-300">
                     <button className="border h-fit w-fit rounded-full bg-cyan-800" onClick={() => setshowAdminName(prev => !prev)}><User/></button>
                     <button className="border h-fit w-fit rounded-2xl bg-cyan-800" onClick={() => router.push("/")}>Home</button>
                     <button className="border h-fit w-fit rounded-2xl bg-cyan-800" onClick={() => router.push("/blog")}>Blog</button>
                </div>

                 <div className="border h-fit w-fit rounded-full flex justify-center items-center bg-cyan-800">
                    <button onClick={() => setshowLogout(prev => !prev)}><EllipsisVertical color="cyan"/></button>
                 </div>
           </div> 
                < div className=" absolute ml-92 bg-cyan-900 h-29 ">
                     {
                        showLogout && (
                          <div>
                          <div>
                             <button className="mt-2" onClick={() => handleLogout()}><LogOut color="cyan"/></button> 
                          </div>
                            <div>
                              <button className="mt-2"><Pen color="cyan"/></button>
                            </div>
                            <div>
                               <button className="mt-2" onClick={() => setdeletBlog(blog)}><Trash2 color="cyan"/></button>
                            </div>
                          </div> 
                            
                        )
                      }
                 </div>

                 <div>
                     {
                      showAdminName &&(
                        <div>
                           <p className="absolute text-cyan-300">{admin.fullname}</p>
                        </div>
                      )
                     }
                 </div>


                 <div>
                     {
                      deleteBlog && (
                         <div className="absolute z-10 border h-30 w-50 p-2  bg-cyan-800 ml-22 mt-40">
                           <p>Are you sure you want to delete this note?</p>
                            <div className="flex justify-between mt-8">
                                 <button className="text-green-400" onClick={() => setdeletBlog(null)}>Cancel</button>
                                 <button className="text-red-400" onClick={() => hundleDeleteBlog(blog._id)}>Delete</button>
                            </div>
                         </div>
                      )

                     }
                 </div>
                
    </div>    
        
    )
}