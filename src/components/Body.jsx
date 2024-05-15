import React, { useState } from 'react';
import useSwiggyMainAPI from '../Utils/useSwiggyMainAPI.js';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../Utils/useOnlineStatus';
import WhatsOnYourMind from './WhatsOnYourMind.jsx';
import ResOnlineFoodDelivery, {vegOrNonVeg} from './ResOnlineFoodDelivery.jsx';
import TopResChain from './TopResChain.jsx';

const Body = () => {

  const { topRestaurants, filteredrestaurantdata, setfilteredrestaurantdata, foodData, OFDData, filteredOFDData, setFilteredOFDData } = useSwiggyMainAPI();
  const onlineStatus = useOnlineStatus();
  const WithVegTag = vegOrNonVeg(ResOnlineFoodDelivery);

  const [searchText, setSearchText] = useState("");

  const filterRestaurants = () => {
    const arr = topRestaurants.filter((res) => res.info.avgRating > 4.5)
    setfilteredrestaurantdata(arr);
  }

  const ratingFilterHandler = () => {
    const newArr = OFDData.filter((res)=>res?.info?.avgRating > 4.4)
    setFilteredOFDData(newArr);
    console.log("New array:",newArr);
  }

  const searchTextHandler = () => {
    const res = topRestaurants.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase())
    })
    setfilteredrestaurantdata(res);
  }

  const filterChangeHandler = (e) => {
    setSearchText(e.target.value);
  }

  if (onlineStatus === false) {
    return (
      <h1>Please check your internet connection!</h1>
    )
  }

  if (!topRestaurants || topRestaurants.length === 0) {
    return <Shimmer />
  }

  return (
    <div className='max-w-[1120px] min-w-[1120px] mx-auto overflow-x-hidden'>
      <div className='overflow-x-scroll no-scrollbar'>
        <div className='flex justify-between'>
          <h1 className='text-[24px] font-bold pt-3'>What's on your mind?</h1>
          <div className='flex gap-10'>
            <button> ⬅️ </button>
            <button> ➡️ </button>
          </div>
        </div>
        <div className='flex border-b-2 cursor-pointer mt-2 gap-7'>
          {
            foodData?.map((fooditem) => {
              return <WhatsOnYourMind key={fooditem.id} fooditem={fooditem}/>
            })
          }
        </div>
      </div>
      <div className='flex-row'>
        <div>
          <input onChange={filterChangeHandler}
            value={searchText}
            type='text' placeholder='Search something' className='border-black border-2 rounded-md' />
          <button onClick={searchTextHandler}>Search</button>
        </div>
      </div>
      <div className='border-b-2 mt-8 '>
        <div className='flex justify-between'>
          <p className='font-bold text-2xl'>Top restaurants chain in surat</p>
          <button
            onClick={filterRestaurants}
            className='border-2 border-black bg-slate-400 rounded-md p-1 m-2 hover:bg-purple-400'
          >Top rated restraunts</button>
        </div>
        <div className='flex overflow-x-scroll no-scrollbar '>
          {
            filteredrestaurantdata?.map((restaurant) => (
              <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><TopResChain restaurant={restaurant} /></Link>
            ))
          }
        </div>
      </div>
      <div className='mt-8'>
        <p className='text-2xl font-bold'>Restaurant with online food delivery in Surat</p>
        <div className='flex gap-4 my-8'>
          <button className='border border-1 border-slate-200 rounded-3xl px-3 py-2 shadow-sm shadow-slate-300'>Filter</button>
          <button className='border border-1 border-slate-200 rounded-3xl px-3 py-2 shadow-md shadow-slate-300'>Sort By</button>
          <button className='border border-1 border-slate-200 rounded-3xl px-3 py-2 shadow-md shadow-slate-300'>Fast Delivery</button>
          <button className='border border-1 border-slate-200 rounded-3xl px-3 py-2 shadow-md shadow-slate-300'>New on Swiggy</button>
          <button onClick={ratingFilterHandler} className='border border-1 border-slate-200 rounded-3xl px-3 py-2 shadow-md shadow-slate-300'>Ratings 4.0+</button>
          <button className='border border-1 border-slate-200 rounded-3xl px-3 py-2 shadow-md shadow-slate-300'>Pure Veg</button>
          <button className='border border-1 border-slate-200 rounded-3xl px-3 py-2 shadow-md shadow-slate-300'>Offers</button>
          <button className='border border-1 border-slate-200 rounded-3xl px-3 py-2 shadow-md shadow-slate-300'>Rs. 300-Rs. 600</button>
          <button className='border border-1 border-slate-200 rounded-3xl px-3 py-2 shadow-md shadow-slate-300'>Less than Rs. 300</button>
        </div>
        <div className='gap-5 mt-5 grid grid-cols-4 grid-rows-3'>
          {
            filteredOFDData?.map((cardData)=>{
              return (
                cardData?.info?.veg ? (<WithVegTag key={cardData.info.id} cardData={cardData}/>) : (<ResOnlineFoodDelivery key={cardData.info.id} cardData={cardData}/>)
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Body;