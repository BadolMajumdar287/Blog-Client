import { NextResponse } from "next/server";
import { cookies } from "next/headers";



export default async function middleware(request) {
 
 try {

       const pathName = request.nextUrl.pathname
        
        const _cookies = await cookies()
 
        
        const sessionKey = _cookies.get('session')?.value
       
   

const url = `${process.env.NEXT_PUBLIC_API_BASE}/api/admin/session`
      
  const res = await fetch(url, {
            method: "GET",
            headers: {
                "session": sessionKey,
                "Content-Type": "application/json",
            },
        });
    
        const {admin} = await res.json();
            
       
       if (admin && pathName.startsWith('/admin') && !pathName.startsWith('/adminbpage')) {
       return NextResponse.redirect(new URL('/adminpage', request.nextUrl.origin));
       }

       if (!admin && pathName.startsWith('/adminpage') && pathName !== '/admin/login') {
        return NextResponse.redirect(new URL('/admin/login', request.nextUrl.origin));
       }
        return NextResponse.next();

      


  
 } catch (error) {
  
       console.error('[Middleware Error]', error.message)
        return NextResponse.next();

 }
   
   
   
 
}



export const config = {
  matcher: ['/adminblog/:path*', '/admin/:path*'],
};
