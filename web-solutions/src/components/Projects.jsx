// import { LearnMore } from "./Helper/LearnBtn";
// import { ProjectCard } from "./Helper/ProjectCard";
// import { ArrowRight } from "lucide-react"
// import { NavLink } from "react-router";
// import { information } from "../assets/data/data";

// export function Projects(){

//     const topProjects = information[1].projects.slice(0,4)
//     return (
//         <>
//             <div className="grid md:grid-cols-2 grid-rows-[repeat(auto)] md:grid-rows-[100px_repeat(10,80px)] px-6 gap-y-6 gap-x-8 py-50 ">
//                 <div className="flex flex-col gap-6 text-white row-span-3 px-5">
//                     <div className="text-xl font-inter900 text-greenPrimary">Portfolio</div>
//                     <div className="text-3xl font-inter700 ">Check out our popular projects</div>
//                     <div className="font-poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati suscipit porro asperiores numquam magnam enim voluptatibus, a explicabo. Aliquid mollitia obcaecati deleniti nisi natus temporibus ducimus odit officia pariatur quasi.</div>
//                     <NavLink to='/portfolio' id="learn_more" className="flex gap-2 bg-white w-6/12 justify-center items-center py-3 transition-all duration-500 ease-in-out hover:bg-greenSecondary hover:text-white text-black hover:scale-101 hover:rounded-sm hov" >
//                         <span className="text-lg font-inter700">See Projects</span>
//                         <ArrowRight className=" transform -rotate-40 "  size={24}/>
//                     </NavLink>
//                 </div>
//                 {topProjects.map((project,index)=>{
//                 return(
//                     <ProjectCard key={index} id={project.id}/>
//                 )

//                 })}
//             </div>
//         </>
//     )
// }

import { LearnMore } from "./Helper/LearnBtn";
import { ProjectCard } from "./Helper/ProjectCard";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router";
import { information } from "../assets/data/data";
import { motion } from "framer-motion";

export function Projects() {
    const topProjects = information[1].projects.slice(0, 4);

    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid md:grid-cols-2 grid-rows-[repeat(auto)] md:grid-rows-[100px_repeat(10,80px)] px-6 gap-y-6 gap-x-8 py-50"
        >
            {/* Animated heading section */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col gap-6 text-white row-span-3 px-5"
            >
                <div className="text-xl font-inter900 text-greenPrimary">Portfolio</div>
                <div className="text-3xl font-inter700">Check out our popular projects</div>
                <div className="font-poppins">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati suscipit porro asperiores numquam magnam enim voluptatibus, a explicabo. Aliquid mollitia obcaecati deleniti nisi natus temporibus ducimus odit officia pariatur quasi.
                </div>
                <motion.div>
                    <NavLink 
                        to='/portfolio' 
                        id="learn_more" 
                        className="flex gap-2 bg-white w-6/12 justify-center items-center py-3 transition-all duration-500 ease-in-out hover:bg-greenSecondary hover:text-white text-black hover:scale-101 hover:rounded-sm"
                    >
                        <span className="text-lg font-inter700">See Projects</span>
                        <ArrowRight className="transform -rotate-40" size={24} />
                    </NavLink>
                </motion.div>
            </motion.div>

            {/* Animated Project Cards */}
            {topProjects.map((project, index) => (
                <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
                    className="row-span-5"
                >
                    <ProjectCard id={project.id} />
                </motion.div>
            ))}
        </motion.div>
    );
}
