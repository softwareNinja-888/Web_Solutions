import { motion } from "framer-motion";
import { AnimatedImg } from "./Helper/AnimatedImg";
import { information } from "../assets/data/data";

export function About(){
    const companyName = information[0].company_name;

    return (
        <>
            <div id='about' className="flex flex-col lg:flex-row lg:px-16 pb-20 gap-[100px] px-5 py-50">
                <div className="flex flex-col w-full lg:w-1/2 text-white">
                    <div className="flex items-center gap-5 ">
                        <p className="text-3xl text-greenPrimary font-inter600">{`#2.`}</p>
                        <p className="text-3xl font-inter600 ">About Us</p>
                    </div>
                    <hr
                        className="w-12/12 h-2 self-center  my-4 text-greenPrimary  bg-greenPrimary "
                        style={{ transform: 'scaleY(0.5)' }}
                    />
                    <div className="flex flex-col mt-4 gap-5 font-inter400">
                        At {companyName}, we help Eswatini businesses succeed online with smart marketing that works. We know the local market inside out and offer website design, SEO, SMS campaigns, PPC ads, content creation, email marketing, and detailed reports to grow your business.
                        <div className="flex flex-col text-md ">
                        <span className="mb-6">
                            What makes us different is our deep understanding of Eswatini consumers combined with our technical skills. We use AI to gather local data that gives you an edge over competitors, creating strategies that connect with your audience and deliver real results.
                        </span>
                        </div>
                    </div>
                </div>
                <AnimatedImg img='/illus/planning.png' alt='illustration' />
            </div>
        </>
    )
}