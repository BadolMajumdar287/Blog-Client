"use client";
import { useRouter } from "next/navigation";


export default function Navbar() {
  const router = useRouter();

  return (
    <div className="fixed top-0 right-0 left-0 bg-cyan-900 border h-9 w-full flex items-center justify-between ">
      <div className="flex items-center gap-2">
        <button className="border w-fit h-fit rounded-2xl text-cyan-400 bg-cyan-950 "onClick={() => router.push("/")}>Home</button>
        <button className="border w-fit h-fit rounded-2xl text-cyan-400 bg-cyan-950" onClick={() => router.push("/blog")}>Blog</button>
        <button className="border w-fit h-fit rounded-2xl text-cyan-400 bg-cyan-950" onClick={() => router.push("/blog/contact")}>Contact Us</button>
      </div>
      <div className="">
        <button className="border w-fit h-fit rounded-2xl text-cyan-400 bg-cyan-950" onClick={() => router.push("/admin/login")}>Admin Login</button>
      </div>
    </div>
  );
}