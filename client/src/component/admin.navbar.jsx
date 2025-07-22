"use client"
import { useRouter } from "next/navigation"
import { EllipsisVertical,LogOut,User } from "lucide-react"
import { AdminAction } from "@/redux/action/admin.action";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";



export default function AdminNavbar(){
      const router = useRouter();
       const dispatch = useDispatch();

       async function handleLogout() {
            
        const res = await dispatch(AdminAction.Logout());

          if(res.payload?.message){
            toast.success(res.payload?.message);
          }else if(res.payload?.error){
            toast.error(res.payload?.error);
          }

       }
    return(
        <div className="fixed top-0 right-0 left-0 bg-cyan-900 border h-9 w-full flex items-center justify-between ">
            <div>
                 
                  <button className="border w-fit h-fit rounded-2xl ml-2 bg-cyan-950 text-cyan-500 " onClick={() => router.push("/")}>Home</button>
                  <button className="border w-fit h-fit rounded-2xl ml-2 bg-cyan-950 text-cyan-500" onClick={() => router.push("/blog")}>Blog</button>

 *-
 
           </div>
              <button onClick={() => handleLogout()}><LogOut size={23}/></button>
            <div> 
              
                <button className="border h-fit w-fit rounded-2xl flex mr-1 bg-cyan-950  text-cyan-500"><EllipsisVertical size={23} /></button>  
            </div>
               
        </div>
    )
}