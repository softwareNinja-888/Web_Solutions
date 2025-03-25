import { StarRating } from "../Helper/StarRating";

export function ReviewCard(){

    return (
        <>
            <div className="flex flex-col gap-8 border border-primary bg-primary w-110 h-58 px-3 py-5 rounded-2xl -rotate-3">
                <StarRating rating={5}/>
                <div className="">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, vel quo aperiam in fugiat at et rem ."</div>
                <div className="flex gap-2">
                    <img src="/designer.webp" alt="" className="w-13 h-13 rounded-full" />
                    <div className="flex flex-col text-sm justify-center ">
                        <div className="">John Doe</div>
                        <div className="">Co-Founder, Apple</div>
                    </div>
                </div>

            </div>
        </>
    )
}