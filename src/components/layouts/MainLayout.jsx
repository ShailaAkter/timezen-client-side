import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import StarsCanvas from "../ui/starBackground/Background"

const MainLayout = () => 
{
  return (
    <div>
        <Navbar/>
        <StarsCanvas/>
        <div className="relative z-10">
          <Outlet/>
          <Footer/>
        </div>
    </div>
  )
}

export default MainLayout