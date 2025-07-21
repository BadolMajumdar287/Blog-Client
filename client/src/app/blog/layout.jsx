import Navbar from "@/component/navbar"
export default function Layout({children}){

    return(
        <main>
               <Navbar/>
               {children}

        </main>
    )

}