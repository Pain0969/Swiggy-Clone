import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {  
    const { resId } = useParams();
    const { resInfo } = useRestaurantMenu(resId);
    const [activeIndex, setActiveIndex] = useState(0);

    if (resInfo === null) {
        return <Shimmer />;
    }

    // console.log("resInfo", resInfo);

    const {name, avgRatingString, costForTwoMessage, cuisines, areaName, sla, totalRatingsString, aggregatedDiscountInfoV2} = resInfo?.cards?.[2]?.card?.card?.info;
    
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>(c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"))

    // console.log(categories);
    return (
        <div className="w-1/2 mx-auto mt-10">
            <h1 className="font-bold text-xl my-8">{name}</h1>
            <div className="border-2 border-slate-400 rounded-xl p-5 shadow-md leading-7">
                <p className="font-bold">{avgRatingString} ({totalRatingsString}). {costForTwoMessage}</p>
                <h3 className="text-orange-600 underline font-bold">{cuisines.join(", ")}</h3>
                
                <div>
                <h3 className="text-sm"><span className="font-bold">Outlet</span>   {areaName}</h3>
                <h3 className="font-bold">{sla?.minDeliveryTime}-{sla?.maxDeliveryTime}min</h3>
                </div>
            </div>
            <div className="mt-8">
                <div className="flex justify-between">
                    <h1 className="font-bold text-lg">Deals for you</h1>
                    <div className="flex gap-5">
                        <button>⬅️</button>
                        <button>➡️</button>
                    </div>
                </div>
                <div className="">
                    <p>{aggregatedDiscountInfoV2?.descriptionList[0]?.meta}</p>

                    <p></p>
                </div>
            </div>
            <div className="mt-8">
                <h1 className="text-slate-5 text-center mt-5 font-bold ">MENU</h1>
                <div className="relative my-5 shadow-md">
                    <input 
                        type='text' placeholder='Search for dishes' className=' rounded-md w-full placeholder:text-center p-3 bg-gray-50'/>
                    <button className="absolute right-0 py-3 px-2 ">🔍</button>
                </div>
                <div className="space-x-2 px-2">
                    <button className="border-2 rounded-3xl p-2 text-green-600 shadow-lg">Pure Veg</button>
                    <button className=" border-2 rounded-3xl p-2 text-slate-600 shadow-lg">Bestseller</button>
                </div>
                <div className="border-2 border-slate-400 my-5"></div>

                {
                    categories.map((category, index)=>{
                        //RestaurantCategory is a controlled component
                        return <RestaurantCategory key={category.card.card.title} data={category?.card?.card} showItems={index === activeIndex? true : false}
                        setActiveIndex={()=>setActiveIndex(index)}
                        />
                    })
                }
            </div>
        </div>
        
    );
};

export default RestaurantMenu;