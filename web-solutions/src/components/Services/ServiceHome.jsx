import React from "react";
import {ServiceImg} from './helper/ServiceImg'
import { Roadmap } from "./helper/Roadmap";


export function ServiceHome(){

    function ServiceCard({ icon, title, details }) {
        return (
          <>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
                <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
                  {icon}
                </div>
                <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-white">
                  {title}
                </h4>
                <p className="text-body-color dark:text-dark-6">{details}</p>
              </div>
            </div>
          </>
        );
      };

  return (
    <section className="pb-12 pt-20  bg-black lg:pb-[90px] lg:pt-[60px] overflow-hidden">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-greenPrimary">
                Our Services
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-white sm:text-4xl md:text-[40px]">
                What We Offer
              </h2>
              <p className="text-base text-white">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-20 gap-10 px-10">
          <div className="flex-1 flex flex-col gap-9">
            <div className="text-5xl text-white font-inter900">Grow your business Online</div>
            <div className="text-lg text-white font-inter400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione reprehenderit officiis ut in ducimus optio quae natus, aspernatur provident tempore ipsum, corrupti ad eos itaque accusamus consectetur saepe a sed</div>
          </div>
          <div className="flex-1 translate-x-20">
            <ServiceImg img='/new/officePeople.jpg'/>
          </div>
        </div>
        <div className=" text-white mt-30 px-20">
          <div className="text-5xl px-9">RoadMap</div>
          <div className="flex flex-wrap justify-center  gap-x-40 gap-y-0 ">
            <Roadmap num="1" name="Planning/Consultation" img="/roadmap/plan.png" />
            <Roadmap num="2" name="Design/Mockup" img="/roadmap/design1.png" />
            <Roadmap num="3" name="Development" img="/roadmap/development.png" />
            <Roadmap num="4" name="Revisions" img="/roadmap/revision.png" />
            <Roadmap num="5" name="Launch & Post Launch Support" img="/roadmap/launch.png" />

          </div>


        </div>

    
      </div>
    </section>
  );
};


