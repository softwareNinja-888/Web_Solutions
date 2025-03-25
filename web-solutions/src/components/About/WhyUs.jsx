import React from "react";
import { PictureDots } from "./PictureDots";
import { AboutImgs } from "./AboutImgs";

export function WhyUs({sectionWidth='w-10/12'}){

      return (
        <>
          <section className={`overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-black ${sectionWidth} mx-auto`}>
            <div className="container mx-auto">
              <div className="flex flex-wrap items-center justify-between -mx-4">
                <div className="w-full px-4 lg:w-6/12">
                  <div className="flex items-center -mx-3 sm:-mx-4">
                    <div className="w-full px-3 sm:px-4 xl:w-1/2">
                      <AboutImgs href="/imgs/office.avif"/>
                      <AboutImgs href="/imgs/office1.avif"/>
                    </div>
                    <div className="w-full px-3 sm:px-4 xl:w-1/2">
                      <div className="relative z-10 my-4">
                        <img
                          src="/imgs/office2.avif"
                          alt=""
                          className="w-full rounded-2xl h-90"
                        />
                        <PictureDots/>
                      </div>
                    </div>
                  </div>
                </div>
    
                <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                  <div className="mt-10 lg:mt-0">
                    <span className="block mb-4 text-lg font-semibold text-greenPrimary">
                      Why Choose Us
                    </span>
                    <h2 className="mb-5 text-3xl font-bold text-white  sm:text-[40px]/[48px]">
                      Make your customers happy by giving services.
                    </h2>
                    <p className="mb-5 text-base text-white">
                      It is a long established fact that a reader will be distracted
                      by the readable content of a page when looking at its layout.
                      The point of using Lorem Ipsum is that it has a more-or-less.
                    </p>
                    <p className="mb-8 text-base text-white">
                      A domain name is one of the first steps to establishing your
                      brand. Secure a consistent brand image with a domain name that
                      matches your business.
                    </p>
                    <a
                      href="javascript:void(0)"
                      className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-greenPrimary hover:bg-opacity-90 hover:scale-103 duration-500"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      );
    };
 