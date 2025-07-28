import AdminNavbar from "@/component/admin.navbar";



export default function layout({children}){

       return(
        <main>

            <AdminNavbar/>
            {children}
        </main>
       )
}