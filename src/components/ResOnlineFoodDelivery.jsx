import React from 'react'
import { CDN_URL } from '../Utils/mockdata';

const ResOnlineFoodDelivery = (props) => {
    const {cloudinaryImageId, avgRating, name, locality, sla, cuisines} =props?.cardData?.info;
  return (
    <div className='cursor-pointer max-w-[300px] max-h-[300px] hover:scale-95'>
        <div className=''>
            <div className='rounded-2xl shadow-slate-400 shadow-'>
              <img className='w-full h-[170px] rounded-2xl object-cover' src={CDN_URL + cloudinaryImageId}/>
            </div>  
            
            <div className='px-2'>
                <h1 className='font-bold'>{name}</h1>
                <p>{avgRating}-{sla?.slaString}</p>
                <p>{cuisines.join(", ")}</p>
                <p>{locality}</p>
            </div>
        </div>
    </div>
  ) 
}
//higher order function
export const vegOrNonVeg = (ResOnlineFoodDelivery) => {
  return (props)=>{
    return(
    <div>
      <label className='absolute bg-black text-green-500 rounded-full p-0.5 z-10'>Veg</label>
      <ResOnlineFoodDelivery {...props}/>
    </div>)
  }
}

export default ResOnlineFoodDelivery;