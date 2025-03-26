import { MdLinearScale } from 'react-icons/md'
import {  createProject } from '../../assets/data/data'
import { NavLink } from 'react-router'


export function ProjectCard({id=0,name='Project Title',img='/mockups/mockupHotel.png',type="Landing page",gridRows='row-span-5',gridColomns=''}){

    const project  = createProject.getProjectById(id)
   
    return (
        <>
            <NavLink to={project.link} target='_blank' className={`flex flex-col gap-5 ${gridRows} ${gridColomns} `}>
                    <div className="">
                        <img src={project.img} alt={`${project.project_name} mockup`} className="cursor-pointer" />
                    </div>
                    <div className="px-5 text-greenPrimary">
                        <div className="flex items-center gap-2"><MdLinearScale className=''/>{project.type}</div>
                        <div className="font-bold text-xl text-white">{project.project_name}</div>
                    </div>
            </NavLink>
        </>
    )
}