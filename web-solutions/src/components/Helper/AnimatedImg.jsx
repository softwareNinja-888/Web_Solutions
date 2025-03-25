import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function AnimatedImg({img,alt,divClass='justify-center w-full md:w-1/2 hidden lg:flex',imgClass='',entryX=-1000}){

    const {ref,inView}= useInView({triggerOnce:true,threshold:0.3})

    return (
        <>
            <div ref={ref} className={`${divClass}`}>
                <motion.img
                    src={img}
                    alt={alt}
                    className={`${imgClass} max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg`}
                    initial={{opacity:0,x:entryX}}
                    animate={inView ? {opacity: 1, x:0}: {}}
                    transition={{duration:0.8,ease:"easeOut"}}
                />
            </div>
        </>
    )
}