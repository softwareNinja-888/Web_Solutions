export function PriceHead({name="",price=0,}){
    return (
        <>
            <th className="px-4 py-8 text-center">
                <span className="text-base font-medium text-blue-600">{name}</span>
                <p className="mt-6 text-6xl font-bold text-white">{`E ${price}`}</p>
            </th>
        </>
    )
}