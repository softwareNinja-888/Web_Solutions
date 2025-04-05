import { Outlet } from "react-router"
import { Header } from "./Header"
import { Footer } from "./Footer"

export function Layout(){
    return (
        <div className="">
            <Header links={[{title:'Our Services',href:'services'},{title:'About Us',href:'about'},{title:'Our Work',href:'portfolio'},{title:'Pricing',href:'pricing'},{title:'Contact Us',href:'contact'},]}/>            
            <Outlet/>
            <Footer/>
        </div>
    )
}