"use client";
import { useRouter } from "next/navigation";


export default function Navbar() {
  const router = useRouter();

  return (
    <div className="fixed top-0 right-0 left-0 h-9 w-full flex justify-center gap-2">
        <button className="border w-fit h-fit rounded-2xl bg-cyan-950 text-cyan-400" onClick={() => router.push("/blog")}>Blog Page</button>
       <button className="border w-fit h-fit rounded-2xl bg-cyan-950 text-cyan-400" onClick={() => router.push("/adminpage")}>Admin Page</button>
        <button className="border w-fit h-fit rounded-2xl text-cyan-400 bg-cyan-950" onClick={() => router.push("/admin/login")}>Admin Login</button>
      </div>
   
  );
}