import { Outlet } from "react-router-dom"
import UserDashboardSidebar from "./UserDashboardSidebar"
import { Toaster } from "react-hot-toast"

const UserDashboardLayout = () => 
{
  return (
    <div>
        <UserDashboardSidebar/>
        <Outlet/>
        <Toaster/>
    </div>
  )
}

export default UserDashboardLayout