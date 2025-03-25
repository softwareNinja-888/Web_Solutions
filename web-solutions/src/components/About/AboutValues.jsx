import { SuccessMsg } from "../Helper/SuccessMsg";
import { ValueCard } from "./ValueCard";

export function Values(){
    return (
        <>
            <div className="">
                <div className="text-5xl font-inter700 text-center mb-20 text-greenPrimary">Our Values</div>
                <div className="flex gap-10">
                    <div className="flex flex-col gap-10">
                        <ValueCard/>
                        <ValueCard/>
                    </div>
                    <div className="flex flex-col gap-10 mt-20">
                        <ValueCard/>
                        <ValueCard/>
                    </div>
                    <div className="flex flex-col gap-10 mt-40">
                        <ValueCard/>
                        <ValueCard/>
                    </div>
                </div>
            </div>
        </>
    )
}