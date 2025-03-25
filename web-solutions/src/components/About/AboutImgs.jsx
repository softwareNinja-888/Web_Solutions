export function AboutImgs({href='/imgs/office.avif'}){
    return (
        <>
            <div className="py-3 sm:py-4">
                <img src={href} alt="" className="w-full rounded-2xl h-90"/>
            </div>
        </>
    )
}