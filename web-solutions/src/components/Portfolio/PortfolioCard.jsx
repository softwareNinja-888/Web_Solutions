// import { createProject } from "../../assets/data/data";

// export function  PortfolioCard({
//     id,
//     showCard,
//     category,
//     ImageHref,
//     title,
//     button,
//     buttonHref,
    
//   }) {

//     const project  = createProject.getProjectById(id)
    
//     return (
//       <>
//         <div
//           className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
//             showCard === "all" || showCard === category.toLowerCase()
//               ? "block"
//               : "hidden"
//           }`}
//         >
//           <div className="relative mb-12">
//             <div className="overflow-hidden rounded-[10px]">
//               <img src={ImageHref} alt="portfolio" className="w-full h-[480px]" />
//             </div>
//             <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
//               <span className="text-primary mb-2 block text-sm font-medium">
//                 {category}
//               </span>
//               <h3 className="text-dark dark:text-white mb-5 text-xl font-bold">{title}</h3>
//               <a
//                 href={buttonHref}
//                 className="text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white"
//               >
//                 {button}
//               </a>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   };
  


import { createProject } from "../../assets/data/data";
import { MdLinearScale } from "react-icons/md";
import { NavLink } from "react-router";

export function  PortfolioCard({
    id,
    showCard,
    underConstruction=false
  }) {

    const project  = createProject.getProjectById(id)
    
    
    return (
      <>
        <div
          className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
            showCard === "all" || showCard === project.type.toLowerCase()
              ? "block"
              : "hidden"
          }`}
        >
           <NavLink to={project.link} target='_blank' className={`flex flex-col gap-5`}>
                    <div className="">
                        <img src={project.img} alt={`${project.project_name} mockup`} className="cursor-pointer" />
                    </div>
                    <div className="px-5 text-greenPrimary">
                        <div className="flex justify-between">
                          <div className="flex items-center gap-2"><MdLinearScale className=''/>{project.type}</div>
                          <div className="text-white font-inter900">{underConstruction ? 'Site under development': ''}</div>
                        </div>
                        <div className="font-bold text-xl text-white">{project.project_name}</div>
                    </div>
            </NavLink>
        </div>
      </>
    );
  };
  