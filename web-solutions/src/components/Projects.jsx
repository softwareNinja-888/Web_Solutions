import { LearnMore } from "./Helper/LearnBtn";
import { ProjectCard } from "./Helper/ProjectCard";
import { ArrowRight } from "lucide-react"
import { NavLink } from "react-router";
import { information } from "../assets/data/data";

export function Projects(){
    console.log(information[1].projects)
    return (
        <>
            <div className="grid grid-cols-2 grid-rows-[100px_repeat(10,80px)] px-6 gap-y-6 gap-x-8 py-50 ">
                <div className="flex flex-col gap-6 text-white row-span-3 px-5">
                    <div className="text-xl font-inter900 text-greenPrimary">Portfolio</div>
                    <div className="text-3xl font-inter700 ">Check out our popular projects</div>
                    <div className="font-poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati suscipit porro asperiores numquam magnam enim voluptatibus, a explicabo. Aliquid mollitia obcaecati deleniti nisi natus temporibus ducimus odit officia pariatur quasi.</div>
                    <NavLink to='/portfolio' id="learn_more" className="flex gap-2 border border-white bg-white w-6/12 justify-center items-center py-3 transition-all duration-500 ease-in-out hover:bg-gray-200" >
                        <span className="text-lg font-inter700 text-black">See Projects</span>
                        <ArrowRight className=" transform -rotate-40 text-black"  size={24}/>
                    </NavLink>
                </div>
                <ProjectCard name="Salt&Light Blog" img="/mockups/mockupBlog.png" type="Christian Blog" gridRows="row-span-5"/>
                <ProjectCard name="The Grand Hotel" img="/mockups/mockupHotel.png" type="Landing Page" gridRows="row-span-5"/>
                <ProjectCard name="One Health" img="/mockups/mockupOneHealth.png" type="Hospital Landing Page" gridRows="row-span-5"/>
                <ProjectCard name="One Hope" img="/mockups/mockupOneHope.png" type="Church Landing Page" gridRows="row-span-5"/>
               
                {/* <ProjectCard name="Salt&Light Ministries" img="/mockups/mockupSalt&light.png" type="Christian Directory" gridRows="row-span-5"/>
                <ProjectCard name="Torch" img="/mockups/mockupTorch.png" type="SaaS Landing Page" gridRows="row-span-5"/> */}
            </div>
        </>
    )
}