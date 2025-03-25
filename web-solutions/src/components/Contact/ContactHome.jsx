import { ReviewCard } from "./ReviewCard";
import { ContactPageForm } from "./ContactPageForm";

// import {FaRegHandWave} from 'react-icons/fa'
import { FaHandPaper } from "react-icons/fa";

export function ContactHome(){

    return (
        <>
            <div   className="flex gap-30 mt-20 justify-center items-start text-white px-10 mb-62 overflow-hidden">
                <div className="flex flex-col gap-20 flex-1 py-24">
                    <div className="flex flex-col gap-5">
                        <div className="text-4xl font-inter900">We would love to hear from you get in touch
                        </div>
                        <div className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptas nihil modi eligendi facere, quaerat, optio dolorem aliquid illum neque.</div>
                    </div>
                    <ReviewCard/>
                </div>
                <div style={{backgroundImage: "url('/formBg.svg')"}} className="flex-1 relative px-20 py-20">
                    {/* Contact Form Component */}
                    <div className="relative z-10">
                        <ContactPageForm/>
                    </div>
                </div>
            </div>
        </>
    )
}

