export function Roadmap({num='0',name="Phase Name",img='/roadmap/design1.png',text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, consequuntur laborum maiores.'}){
    return (
        <>
            <div className="flex flex-col gap-3 py-7 px-5 bg-black mt-20 w-62 ">
                <div className="">
                    <img src={img} alt="" className="w-19 h-19" />
                </div>
                <div className="text-xl">
                    Phase {num}
                </div>
                <div className="text-sm text-gray-500">
                    {name}
                </div>
                <div className="text-sm ">{text}</div>
            </div>
        </>
    )
}