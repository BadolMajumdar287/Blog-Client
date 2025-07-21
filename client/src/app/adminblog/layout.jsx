import AdminNavbar from "@/component/admin.navbar"

export default function Layout({ children}) {

    return(
        <main>
            <AdminNavbar />
            {children}
        </main>
    )
}