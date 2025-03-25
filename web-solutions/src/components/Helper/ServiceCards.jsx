import { LearnMore } from "./LearnBtn";
import {NavLink} from 'react-router'

export function ServiceCard({title='',img='/heroBgM.avif'}) {
    return (
        <div className="relative flex flex-col justify-between items-center rounded-lg h-[400px] py-6 cursor-pointer 
            overflow-hidden group">
            
            {/* Background Image with Zoom Effect */}
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out 
                scale-100 group-hover:scale-110"
                style={{ backgroundImage: `url(${img})` }} 
            ></div>

            {/* Content - Kept Above the Background */}
            <div className="relative z-10 flex flex-col gap-3 text-white w-10/12">
                <div className="text-xl font-inter700">{title}</div>
                <div className="font-inter400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, corrupti! Totam nisi nihil perferendis.
                </div>
            </div>

            <LearnMore />
        </div>
    );
}