export function TeamCard({name,position,img}){
    return (
        <>
            <div className="cursor-pointer hover:scale-102 transition duration-500">
                <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44" src={img} alt="" />
                <p className="mt-5 text-lg font-extralight text-white sm:text-xl sm:mt-8">{name}</p>
                <p className="mt-2 text-base font-inter700 text-white">{position}</p>
            </div>
        </>
    )
}