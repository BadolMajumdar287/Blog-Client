"use client"
import { useRouter } from "next/navigation"
import { EllipsisVertical,LogOut,User } from "lucide-react"


export default function AdminNavbar(){
      const router = useRouter();
    return(
        <div className="fixed top-0 right-0 left-0 bg-cyan-900 border h-9 w-full flex items-center justify-between ">
            <div>
                 
                  <button className="border w-fit h-fit rounded-2xl ml-2 bg-cyan-950 text-cyan-500 " onClick={() => router.push("/")}>Home</button>
                  <button className="border w-fit h-fit rounded-2xl ml-2 bg-cyan-950 text-cyan-500" onClick={() => router.push("/blog")}>Blog</button>

            </div>

            <div> 
                <button className="border h-fit w-fit rounded-2xl flex mr-1 bg-cyan-950  text-cyan-500"><EllipsisVertical size={23} /></button>  
            </div>
        </div>
    )
}