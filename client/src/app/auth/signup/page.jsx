"use client"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { AuthAction } from "@/redux/action/auth.action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


export default function UserSignup(){

       const [name,setname] = useState("");
       const [email,setemail] = useState("");
       const [password,setpassword] = useState("");
       const dispatch = useDispatch();
       const router = useRouter();
       
  async function handleUserSignup() {

      if(!name) return toast.error("Enter your name");
      if(!email) return toast.error("Enter your email");
      if(!password) return toast.error("Enter your password");

      const res = await dispatch(AuthAction.Register({name,email,password}));

      if(res.payload?.message){
        toast.success(res.payload?.message);
      }else if(res.payload?.error){
        toast.error(res.payload?.error);
      }
    
    
  }

      return(
           
          <div className="border w-70 h-65 mt-80 ml-30">
                   <p className="text-cyan-500 pl-18">User Signup page</p>
                <div className="mt-12 ml-8">
                    <input className="h-8 rounded-2xl bg-cyan-700 text-cyan-300 pl-2 "
                     id="name" type="name" placeholder="Enter your name..." value={name} onChange={(e) => setname(e.target.value)}/>
                </div>
                <div className="mt-2 ml-8">
                    <input className=" h-8 rounded-2xl bg-cyan-700 text-cyan-300 pl-2"
                    id="email" type="email" placeholder="Enter your email..." value={email} onChange={(e) => setemail(e.target.value)}/>
                </div>
                <div className="mt-2 ml-8" >
                    <input className=" h-8 rounded-2xl bg-cyan-700 text-cyan-300 pl-2"
                    id="password" type="password" placeholder="Enter your password..." value={password} onChange={(e) => setpassword(e.target.value)}/>
                </div>
                
                <div className="border h-fit w-fit rounded-2xl bg-cyan-800 text-cyan-400 ml-30 mt-2">
                     <button onClick={() => handleUserSignup()}>Signup</button>
                </div>


                <div className=" mt-2 ml-3 ">
                     <p className="text-cyan-200 text-xl">You have an account?<button onClick={() => router.push("/auth/login")}>Login</button></p>
                </div>
                


          </div>
      )
}