import { ServiceCard } from "./Helper/ServiceCards";
import { AnimatedImg } from "./Helper/AnimatedImg";
import {information} from '../assets/data/data'

import webDevelopment from '/imgs/website2.avif'
import SMS from '/imgs/SMS1.avif'
import data from '/imgs/office2.avif'

export function Services(){

  const companyName = information[0].company_name;

  return(
    <>
      <div id='services' className="flex flex-col lg:flex-row lg:px-16 pb-40 gap-[150px] px-2 ">
          <div className="flex flex-col w-full lg:w-1/2 text-white">
              <div className="flex items-center gap-5 ">
                  <p className="text-3xl text-greenPrimary font-inter600">{`#1.`}</p>
                  <p className="text-3xl font-inter600">Our Services</p>
              </div>
              <hr
                  className="w-12/12 h-2 self-center  my-4 text-greenPrimary  bg-greenPrimary "
                  style={{ transform: 'scaleY(0.5)' }}
              />
              <div className="flex flex-col mt-4 gap-5 font-inter400">
                  At {companyName}, we help Eswatini businesses succeed online with smart marketing that works. We know the local market inside out and offer website design, SEO, SMS campaigns, PPC ads, content creation, email marketing, and detailed reports to grow your business.
                  <div className="flex flex-col text-md ">
                  <span className="mb-6">
                      What makes us different is our deep understanding of Eswatini consumers combined with our technical skills. We use AI to gather local data that gives you an edge over competitors, creating strategies that connect with your audience and deliver real results.
                  </span>
                  </div>
              </div>
          </div>
          <AnimatedImg img='/illus/laptop.png' alt='illustration' entryX={1000}/>
      </div>
      <div className="flex gap-16 px-10 py-10" >
        <ServiceCard title="Web Development" img={webDevelopment}/>
        <ServiceCard title="SMS Marketing" img={SMS}/>
        <ServiceCard title="AI driven Marketing" img={data}/>
      </div>
    </>
  )
}