import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetchData();
    },[]);
    // console.log(resId);

    //api call
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.18880&lng=72.82930&restaurantId=" +resId+"&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");
        const json = await data.json();
        setResInfo(json.data);
    }
    
    return {resInfo, setResInfo};
}

export default useRestaurantMenu;