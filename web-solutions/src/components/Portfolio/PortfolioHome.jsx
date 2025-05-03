import React, { useState } from "react";
import { PortfolioCard } from "./PortfolioCard";
import { information } from "../../assets/data/data";

export function PorfolioHome(){
      const [showCard, setShowCard] = useState("all");
    
      const handleProject = (type) => {
        setShowCard(type);
      };


    const Projects = information[1].projects
    const types = ['All',...new  Set(Projects.map(item => item.type))];
    const numberOfProjectsCompleted = 3;
    console.log(types.map(type=>type.toLowerCase()))
    
      return (
        <>
          <section className="pt-20 pb-12 lg:pt-[20px] lg:pb-[90px] dark:bg-dark">
            <div className="container mx-auto">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full px-4">
                  <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                    <span className="text-primary mb-2 block text-lg font-semibold">
                      Our Portfolio
                    </span>
                    <h2 className="text-white mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                      Our Recent Projects
                    </h2>
                    <p className="text-white text-base dark:text-dark-6">
                      There are many variations of passages of Lorem Ipsum available
                      but the majority have suffered alteration in some form.
                    </p>
                  </div>
                </div>
              </div>
    
              <div className="w-full flex flex-wrap justify-center -mx-4">
                <div className="w-full px-4">
                  <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                    {types.map((type,index)=>{
                      return (
                        <li className="mb-1" key={index}>
                          <button
                            onClick={() => handleProject(`${type.toLowerCase()}`)}
                            className={`inline-block rounded-lg py-2 px-5 text-center text-base font-inter600 transition md:py-3 lg:px-8 cursor-pointer ${
                              showCard === type.toLowerCase()
                                ? "activeClasses bg-greenSecondary text-white"
                                : "inactiveClasses text-white  hover:bg-greenSecondary"
                            }`}
                          >
                            {type}
                          </button>
                        </li>
                      )
                    })}
                    {/* <li className="mb-1">
                        <button
                          onClick={() => handleProject("all")}
                          className={`inline-block rounded-lg py-2 px-5 text-center text-base font-inter600 transition md:py-3 lg:px-8 cursor-pointer ${
                            showCard === "all"
                              ? "activeClasses bg-greenSecondary text-white"
                              : "inactiveClasses text-white  hover:bg-greenSecondary"
                          }`}
                        >
                          All
                        </button>
                    </li>
                    <li className="mb-1">
                      <button
                        onClick={() => handleProject("landing page")}
                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-inter600 transition md:py-3 lg:px-8 cursor-pointer ${
                          showCard === "landing page"
                            ? "activeClasses bg-greenSecondary text-white"
                            : "inactiveClasses text-white  hover:bg-greenSecondary"
                        }`}
                      >
                        Landing Pages
                      </button>
                    </li>  
                    <li className="mb-1">
                      <button
                        onClick={() => handleProject("other")}
                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-inter600 transition md:py-3 lg:px-8 cursor-pointer ${
                          showCard === "other"
                            ? "activeClasses bg-greenSecondary text-white"
                            : "inactiveClasses text-white  hover:bg-greenSecondary"
                        }`}
                      >
                        Other
                      </button>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="flex flex-wrap -mx-4 gap-y-20">
                
                  {Projects.map((project,index)=>{
                    return(
                      <PortfolioCard
                      id={project.id}
                      showCard={showCard} 
                      key={index} 
                      underConstruction={index >= numberOfProjectsCompleted}
                      />
                    )

                  })}
              </div>
            </div>
          </section>
        </>
      );
    };
    
