import { useState, useEffect } from "react";
import { SWIGGY_API } from "./mockdata";

const useTopResChain = () => {
    const [topRestaurants, setTopRestaurants] = useState(null);
    const [filteredrestaurantdata, setfilteredrestaurantdata] = useState(null);
    const [foodData, setFoodData] = useState(null);
    const [OFDData, setOFDData] = useState(null);
    const [filteredOFDData, setFilteredOFDData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    //api call
    const fetchData = async () => {
        const data = await fetch(SWIGGY_API);
        const json = await data.json();
        //optional chaining --> ?.
        console.log("swiggy main api",json);
        setTopRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredrestaurantdata(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFoodData(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
        setOFDData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredOFDData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return {topRestaurants, setTopRestaurants, filteredrestaurantdata, setfilteredrestaurantdata, foodData, setFoodData, OFDData, setOFDData, filteredOFDData, setFilteredOFDData};
}

export default useTopResChain;