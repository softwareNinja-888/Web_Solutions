// import React, { useState } from 'react'; 

import { TeamLine } from "./Helper/TeamLine";

import designer from '/designer.webp'
import designer1 from '/designer1.webp'
import designer2 from '/uxDesigner.avif'
import designer3 from '/sophie.webp'
import { TeamCard } from "./Helper/TeamCard";


export function Team(){        
    return (
        <section className="py-12 bg-black sm:py-16 lg:py-40 lg:mb-44">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white font-poppins sm:text-4xl xl:text-5xl font-pj">Meet Our Team</h2>
                </div>

                <div className="grid max-w-6xl grid-cols-1 px-20 mx-auto mt-12 text-center sm:px-0 sm:grid-cols-2 md:mt-20 gap-x-8 md:grid-cols-4 gap-y-12 lg:gap-x-16 xl:gap-x-20 mb-30">
                    <TeamCard img={designer} name='John Doe' position='UX/UI Designer'/> 
                    <TeamCard img={designer1} name='Jane Doe' position='Frontend Developer'/> 
                    <TeamCard img={designer2} name='Ron Doe' position='Backend Developer'/> 
                    <TeamCard img={designer3} name='Alex Doe' position='Sales Director'/> 
                </div>

                {/* <div className="mt-12 sm:mt-16">
                  <TeamLine color="text-greenPrimary" />
                </div> */}

                <div className="max-w-3xl mx-auto mt-12 space-y-8 sm:space-y-0 sm:flex sm:items-center sm:justify-center sm:mt-16 sm:gap-x-16">
                    <div>
                        <img className="w-auto mx-auto h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/logo-waverio.svg" alt="" />
                    </div>

                    <div>
                        <img className="w-auto mx-auto h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/logo-squarestone.svg" alt="" />
                    </div>

                    <div>
                        <img className="w-auto mx-auto h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/logo-creaty.svg" alt="" />
                    </div>
                </div>
            </div>
        </section>

    )
}