import { NavLink } from "react-router"
import { FaArrowRight } from "react-icons/fa"
import { information } from "../../assets/data/data"

export function AboutHead(){

    const companyName = information[0].company_name;
    return (

        <>
            <div className="flex flex-col justify-center items-center gap-6 text-white py-20 w-8/12 mx-auto">
                <div className="text-6xl font-inter700">About <span className="bg-greenPrimary px-1 text-black italic">{companyName}</span></div>
                <div className="flex flex-col mt-4 gap-5 font-inter400">
                        At {companyName}, we help Eswatini businesses succeed online with smart marketing that works. We know the local market inside out and offer website design, SEO, SMS campaigns, PPC ads, content creation, email marketing, and detailed reports to grow your business.
                        <div className="flex flex-col text-md ">
                        <span className="mb-6">
                            What makes us different is our deep understanding of Eswatini consumers combined with our technical skills. We use AI to gather local data that gives you an edge over competitors, creating strategies that connect with your audience and deliver real results.
                        </span>
                        </div>
                    </div>
                <div className="">
                    <NavLink to='/contact' className="group flex justify-center items-center gap-3 border border-greenPrimary py-5 w-72 cursor-pointer hover:bg-greenPrimary hover:text-black transition duration-400 ease-in-out">
                        <div className="font-inter700">Get a Free Consultaion</div>
                        <FaArrowRight size={24}  className="text-greenPrimary group-hover:text-black"/>
                    </NavLink>
                </div>
            </div>
        </>
    )
}