import { GetStarted } from "../Helper/GetStartedP";
import { PriceHead } from "../Helper/PriceHead";
import { PriceRow } from "../Helper/PriceRow";

export function PriceLg(){
    return (
        <>
        
        <div className="hidden mt-16 lg:block">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th className="py-8 pr-4"></th>
            
                                    <PriceHead name="Free" />
                                    <PriceHead name="Team" price={99}/>                                    
                                    <th className="px-4 py-8 text-center bg-yellowCustom rounded-t-xl">
                                        <span className="px-4 py-2 text-base font-medium text-white bg-blue-600 rounded-full"> Popular </span>
                                        <p className="mt-6 text-6xl font-bold text-white">$150</p>
                                        <p className="mt-2 text-base font-normal text-gray-200">Per month</p>
                                    </th> 
                                    <PriceHead name="Enterprise" price={490} />
                
                                </tr>
                            </thead>
            
                            <tbody>

                                <PriceRow name="Website Number" free="01" team="10" popular="50" enterprise="Unlimited"/>
                                <PriceRow name="Server Storage" free="100GB" team="500GB" popular="1TB" enterprise="Unlimited"/>
                        
            

                                <PriceRow name="Unmetered Bandwidth" free="-" team="tick" popular="tick" enterprise="tick"/>
                           
                                <tr>
                                    <td className="py-6 pr-4"></td>
            
                                    <GetStarted/>
            
                                    <GetStarted/>

            
                                    <td className="px-4 py-6 text-center text-white bg-yellow-500 rounded-b-xl">
                                        <a href="#" title="" className="inline-flex items-center font-semibold text-white">
                                            Get Started
                                            <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </td>
            
                                                                        <GetStarted/>

                                </tr>
                            </tbody>
                        </table>
                    </div>
        </>
    )
}