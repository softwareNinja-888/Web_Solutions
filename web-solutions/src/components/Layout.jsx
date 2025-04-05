import { Outlet } from "react-router"
import { Header } from "./Header"
import { Footer } from "./Footer"

export function Layout(){
    return (
        <div className="">
            <Header links={[{title:'Our Services',href:'services'},{title:'About Us',href:'services'},{title:'Our Work',href:'services'},{title:'Pricing',href:'services'},{title:'Contact Us',href:'services'},]}/>            
            <Outlet/>
            <Footer/>
        </div>
    )
}