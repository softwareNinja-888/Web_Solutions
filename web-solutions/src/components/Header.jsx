import { MobileMenu } from './Helper/MobileMenu'
import { Links } from "./Helper/Links";

import { NavLink, } from 'react-router'
import { useState } from 'react';

export function Header({
    logoImg='/logo.svg',
    links=['link1','link2','link3','link4',],
    btnName="Let's Talk",
    sticky=true,}
){

    
    const [menuOpen, setMenuOpen ] = useState(false)

    return ( 
        <>
			<div className={`flex justify-between items-center text-white px-10 lg:px-20 py-10 bg-black ${sticky ? 'sticky top-0 z-50' : null}`}>
                <NavLink to='/' className=''>
                    <img src="/logo1.svg" alt="logo" className="w-16 h-16" />
                </NavLink>
				
                <nav className="hidden lg:flex lg:space-x-10 text-sm ">
                
                    {links.map((link,index)=>{
                        return (
                         
                            <Links key={index} linkName={link.title} href={link.href}/>

                        )
                    })}
                </nav>
                <div id="contact_Btn" className="cursor-pointer hidden lg:flex border border-yellowCustom  text-white  px-10 py-2 hover:bg-yellowCustom  hover:text-black hover:rounded-lg transition-all duration-700 ease-in-out bg-primaryBg font-inter700 ">
                    {btnName}
                </div>

                <div className="lg:hidden">
                    <svg
                        onClick={() => setMenuOpen(!menuOpen)} 
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
            	    {menuOpen && <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
                </div>		

				
			</div>
            	
		</>
    )
}