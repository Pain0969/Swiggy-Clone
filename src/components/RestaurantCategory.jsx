import ResCatItemList from "./ResCatItemList";


const RestaurantCategory = ({data, showItems, setActiveIndex}) =>{
    function clickHandler(){
        setActiveIndex();
    }
    // console.log("data", data);
    return(
    <div>
       {/* accordian header */}
        <div className="bg-gray-50 shadow-md my-4 rounded-lg cursor-pointer">
            <div onClick={clickHandler} className="flex justify-between font-bold p-4">
                <span>{data.title} ({data.itemCards.length})</span>
                <span>🔽</span>
            </div>
            {showItems && <ResCatItemList items={data?.itemCards}/>}         
        </div>
       
       
    </div>
    )
}

export default RestaurantCategory;