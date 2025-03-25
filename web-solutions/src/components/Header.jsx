// import { FormModal } from "./Helper/Modal";
import { Links } from "./Helper/Links";
import { NavLink } from "react-router";

export function Header(){
    return (
        <>
            <div className="flex justify-between items-center text-white px-20 py-10">
                <NavLink to='/' className=''>
                    <img src="/logo1.svg" alt="logo" className="w-16 h-16" />
                </NavLink>
                <nav className="flex text-gray-300 gap-10 ">
                    <Links linkName='Our Services' href="services"/>
                    <Links linkName='About Us' href="about"/>
                     <Links linkName='Our Work' href="portfolio" /> 
                    <Links linkName='Pricing' href="pricing" />
                    <Links linkName='Contact Us' href="contact"/>
                </nav>
                 <div id="contact_Btn" className="cursor-pointer flex border border-yellowCustom  text-white rounded-lg px-10 py-2 hover:bg-yellowCustom  hover:text-black transition duration-400 ease-in-out bg-primaryBg font-inter700 ">Let's Talk
                 </div> 
                {/*<FormModal/>*/}
            </div>
        </>
    )
}