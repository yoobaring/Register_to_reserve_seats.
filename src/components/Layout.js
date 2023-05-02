import { Outlet, useLocation } from "react-router-dom"
import Header from "./Header"

const Layout = () => {
   const location = useLocation()
   let loca = location.pathname
    return loca !== '/' ?<> <Header/> <Outlet /></> : <Outlet />
}

export default Layout