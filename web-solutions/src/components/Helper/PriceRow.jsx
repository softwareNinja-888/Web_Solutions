export function PriceRow({name="",free='-',team='-',popular='-',enterprise='-',}){

        const tick =  <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
        </svg>

    return (
        <>
             <tr>
                <td className="py-4 pr-4 font-medium  text-white border-b border-gray-200">{name}</td>

                <td className="px-4 py-4 text-center  text-white border-b border-gray-200">{free === 'tick' ? tick : free}</td>

                <td className="px-4 py-4 text-center  text-white border-b border-gray-200">{team === 'tick' ? tick : team}</td>

                <td className="px-4 py-4 text-center text-white bg-yellowCustom border-b border-white/20">{popular === 'tick' ? tick : popular}</td>

                <td className="px-4 py-4 text-center border-b border-gray-200 text-white">{enterprise === 'tick' ? tick : enterprise}</td>
            </tr>
            
        </>
    )
}