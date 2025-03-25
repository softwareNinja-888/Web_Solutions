import { NavLink } from "react-router";

export function Links({linkName,href="#"}){

    return (
        <>
            <NavLink to={`/${href}`} className={ ({isActive })=> {
                console.log("isActive:",href,":",isActive)
                return `flex gap-1.5 no-underline relative cursor-pointer  after:content-[""] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:opacity-0 after:transition-opacity after:duration-700 after:ease-in-out hover:after:opacity-100 hover:after:bg-greenPrimary text-base max-[500px]:text-xs font-inter500 ${isActive ? 'text-greenPrimary scale-110 transition-all duration-500' :'text-white'}`;}}>{linkName}</NavLink>
        </>
    )
}