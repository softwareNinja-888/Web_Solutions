import { FaArrowRight } from "react-icons/fa";
import { GradientText } from "./Helper/GradientTxt";
import { NavLink } from "react-router";
import { motion } from "framer-motion";
import { information } from '../assets/data/data';


export function Hero(){

    const companyName = information[0].company_name;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
            delayChildren: 0.3,
            staggerChildren: 0.6,
            },
        },
    };
    
    const itemVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
    };
    
    
    return (
        <>
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col md:flex-row  gap-16 w-screen not-[]:px-6 md:px-16 py-20 ">

                {/* TEXT-CONTENT */}
                <motion.div variants={itemVariants} className="flex flex-col text-white self-center gap-8 flex-2/3">
                    <GradientText text={`${companyName}: Accelerate Digital Success`} width="w-full lg:text-start text-center" h="h-20" size="text-4xl"/>
                    <div className="text-md font-poppins lg:text-start text-center">We craft tailored solutions that connect your business with local audiences and global opportunities. Whether you're a startup or an established brand, let us turn clicks into customers and traffic into revenue.  
                    </div>

                    {/* ADD ACTION AFTER CLICKING BUTTON */}
                    <NavLink to='/contact' className="group flex justify-center items-center gap-3 border border-greenPrimary py-5 w-72 cursor-pointer hover:bg-greenPrimary hover:text-black transition duration-400 ease-in-out mx-auto lg:mx-0">
                        <div className="font-inter700">Get a Free Consultaion</div>
                        <FaArrowRight size={24}  className="text-greenPrimary group-hover:text-black"/>
                    </NavLink>
                </motion.div>

                {/* Image Content */}
                <motion.div
                variants={imageVariants}
                className="w-full md:w-1/2 justify-center hidden lg:block "
                >
                    <img
                        // src='/illus/illus8.png'
                        src='/new/hero.jpg'
                        alt="Illustration"
                        className="max-w-sm md:max-w-md lg:max-w-lg "
                    />
                </motion.div>
            </motion.div>
        </>
    )
}