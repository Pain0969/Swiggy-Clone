import React from 'react'
import { CDN_URL } from '../Utils/mockdata';


const TopResChain = (props) => {
    const {cloudinaryImageId, name, cuisines, avgRating, sla, locality, aggregatedDiscountInfoV3} = props?.restaurant?.info;
  return (
    <div className='relative min-h-[300px] min-w-[300px] rounded-2xl hover:scale-95'>
      <img className ='h-[180px] w-[273px] rounded-2xl shadow-slate-400 shadow-md object-cover' alt='food-logo' src={CDN_URL+cloudinaryImageId}></img>
      <div className='w-[91%] absolute top-0  bg-slate-500 bg-opacity-50 text-white p-4 rounded-t-2xl '>
        <p className='font-extrabold '>{aggregatedDiscountInfoV3?.header} {aggregatedDiscountInfoV3?.subHeader}</p>
      </div>
      <h3 className='font-bold'>{name}</h3>
      <h4>{avgRating} . {sla?.slaString}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{locality}</h4>
    </div>
  )
}

export default TopResChain;  