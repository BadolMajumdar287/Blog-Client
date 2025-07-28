"use client"
import { useState,useEffect } from "react"
import { useRouter } from "next/navigation";

export default function userLogin(){
     
      const [email,setemail] = useState("")
      const [password,setpassword] = useState("");
      const router = useRouter();


    return(
        <div className="top-0 right-0 left-0 flex justify-center mt-52">
            
        <div className="border w-80 h-60 bg-cyan-950 ">
          <div className="mt-1 pl-22 text-cyan-800">User Login Page</div>
            <div className="mt-13 ml-14">
                   
                 <input className="border w-50 h-6 bg-gray-800 text-cyan-500 text-sm rounded-2xl p-2"
                  type="email" placeholder="Enter your email..." value={email} onChange={(e) => setemail(e.target.value)}/>
            
          
                 <input className="border w-50 h-6 bg-gray-800 text-cyan-500 text-sm rounded-2xl mt-2 p-2 "
                 type="password" placeholder="Enter your password..." value={password} onChange={(e) => setpassword(e.target.value)}/>
           
    
            <div>
               <button className="border h-5 w-12 bg-gray-800 text-cyan-600 text-sm rounded-2xl mt-2 ml-19">login</button>

            </div>
            
            <div className="text-cyan-300 mt-10">
                <p>Don't have an account?<button className="pl-2 text-xl" onClick={() => router.push("/auth/signup") }>Signup</button></p>
            </div>
                        
           </div>
           
        </div>

      </div>
    )
}