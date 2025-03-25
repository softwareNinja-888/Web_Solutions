import React, { useState } from "react";
import { PortfolioCard } from "./PortfolioCard";

export function PorfolioHome(){
      const [showCard, setShowCard] = useState("all");
    
      const handleProject = (category) => {
        setShowCard(category);
      };
    
      return (
        <>
          <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
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
                    <li className="mb-1">
                      <button
                        onClick={() => handleProject("all")}
                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                          showCard === "all"
                            ? "activeClasses bg-primary text-white"
                            : "inactiveClasses text-white dark:text-dark-6 hover:bg-primary hover:text-white"
                        }`}
                      >
                        All Projects
                      </button>
                    </li>
                    <li className="mb-1">
                      <button
                        onClick={() => handleProject("branding")}
                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                          showCard === "branding"
                            ? "activeClasses bg-primary text-white"
                            : "inactiveClasses text-white dark:text-dark-6 hover:bg-primary hover:text-white"
                        }`}
                      >
                        Branding
                      </button>
                    </li>
                    <li className="mb-1">
                      <button
                        onClick={() => handleProject("design")}
                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                          showCard === "design"
                            ? "activeClasses bg-primary text-white"
                            : "inactiveClasses text-white dark:text-dark-6 hover:bg-primary hover:text-white"
                        }`}
                      >
                        Design
                      </button>
                    </li>
                    <li className="mb-1">
                      <button
                        onClick={() => handleProject("marketing")}
                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                          showCard === "marketing"
                            ? "activeClasses bg-primary text-white"
                            : "inactiveClasses text-white dark:text-dark-6 hover:bg-primary hover:text-white"
                        }`}
                      >
                        Marketing
                      </button>
                    </li>
                    <li className="mb-1">
                      <button
                        onClick={() => handleProject("development")}
                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                          showCard === "development"
                            ? "activeClasses bg-primary text-white"
                            : "inactiveClasses text-white dark:text-dark-6 hover:bg-primary hover:text-white"
                        }`}
                      >
                        Development
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-wrap -mx-4">
                <PortfolioCard
                  ImageHref="/imgs/office.avif"
                  category="Branding"
                  title="Creative Agency"
                  button="View Details"
                  buttonHref="#"
                  showCard={showCard}
                />
                <PortfolioCard
                  ImageHref="/imgs/office1.avif"
                  category="marketing"
                  title="Creative Agency"
                  button="View Details"
                  buttonHref="#"
                  showCard={showCard}
                />
                <PortfolioCard
                  ImageHref="/imgs/office2.avif"
                  category="marketing"
                  title="Creative Agency"
                  button="View Details"
                  buttonHref="#"
                  showCard={showCard}
                />
                <PortfolioCard
                  ImageHref="/imgs/office3.avif"
                  category="Development"
                  title="Creative Agency"
                  button="View Details"
                  buttonHref="#"
                  showCard={showCard}
                />
                <PortfolioCard
                  ImageHref="/imgs/website.avif"
                  category="Design"
                  title="Creative Agency"
                  button="View Details"
                  buttonHref="#"
                  showCard={showCard}
                />
                <PortfolioCard
                  ImageHref="/imgs/website1.avif"
                  category="Marketing"
                  title="Creative Agency"
                  button="View Details"
                  buttonHref="#"
                  showCard={showCard}
                />
              </div>
            </div>
          </section>
        </>
      );
    };
    
