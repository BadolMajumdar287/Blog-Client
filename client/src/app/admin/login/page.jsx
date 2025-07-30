"use client";
import { useEffect,useState} from "react";
import { AdminAction } from "@/redux/action/admin.action";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation"
import { toast } from "sonner";
import Link from "next/link";

export default function LoginPage(){


       const [email,setemail] = useState("");
       const [password,setpassword] = useState("");
         
       const dispatch = useDispatch();

       async function handleLoginAdmin(){

            if(!email) return toast.error("email is required");
            if(!password) return toast.error("password is required");
        
            const res = await dispatch(AdminAction.Login({email,password}))
                 
            if(res.payload?.message){
              toast.success(res.payload?.message);
               setemail("");
               setpassword("");
               }else if(res.payload?.error){
                toast.error(res.payload?.error);
               }

       }
    return(
        <div className="top-0 right-0 left-0 flex justify-center mt-52">
          
        <div className="border w-80 h-60 bg-cyan-950 ">
          <div className="mt-1 pl-1 text-cyan-800">Admin Login</div>
            <div className="mt-13 ml-14">
                   
                 <input className="border w-50 h-6 bg-gray-800 text-cyan-500 text-sm rounded-2xl p-2"
                  type="email" placeholder="Enter your email..." value={email} onChange={(e) => setemail(e.target.value)}/>
            
          
                 <input className="border w-50 h-6 bg-gray-800 text-cyan-500 text-sm rounded-2xl mt-2 p-2 "
                 type="password" placeholder="Enter your password..." value={password} onChange={(e) => setpassword(e.target.value)}/>
           
    
            <div>
               <button onClick={() => handleLoginAdmin()} className="border h-5 w-12 bg-gray-800 text-cyan-600 text-sm rounded-2xl mt-2 ml-19">login</button>

            </div>

            <div className=" text-cyan-200 mt-10">
              <p>Go To Blog Page ! <Link href="/blog">Blog</Link></p>
            </div>
              
           </div>
           
        </div>

      </div>
    )
}