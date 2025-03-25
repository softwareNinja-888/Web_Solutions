import {AiFillStar} from 'react-icons/ai'

export function StarRating({rating}){
    const totalStars = 5;

    return (
        <div className="flex">
            {[...Array(totalStars)].map((_,index)=>(
                <AiFillStar key={index} size={24} className={index < rating ? 'text-yellow-400': 'text-gray-400'}/>
            ))}
        </div>
    )
}