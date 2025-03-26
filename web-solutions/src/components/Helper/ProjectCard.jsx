import { MdLinearScale } from 'react-icons/md'

export function ProjectCard({name='Project Title',img='/mockups/mockupHotel.png',type="Landing page",gridRows='',gridColomns=''}){

    return (
        <>
            <div className={`flex flex-col gap-5 ${gridRows} ${gridColomns}`}>
                <div className="">
                    <img src={img} alt={`${name} mockup`} className="" />
                </div>
                <div className="px-5 text-greenPrimary">
                    <div className="flex items-center gap-2"><MdLinearScale className=''/>{type}</div>
                    <div className="font-bold text-xl text-white">{name}</div>
                </div>
            </div>
        </>
    )
}