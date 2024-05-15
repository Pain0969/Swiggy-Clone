import { CDN_URL, MEDIA_ASSET_URL } from "../Utils/mockdata";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";

const ResCatItemList = ({items}) => {
    const dispatch = useDispatch();

    const addItemBtn =(item)=>{
        // dispatching an action
        dispatch(addItem(item));
    }
    
    return(
    <div>
        {
            items.map((item)=>(
                
                <div key={item?.card?.info?.id} className="p-2 m-2 border-b-2 flex pb-10">
                    
                    <div className="w-9/12">
                        <span className="font-bold text-lg">{item.card.info.name}</span><br></br>
                        <span className="text-sm font-bold">₹ {item.card.info.price ? (item.card.info.price/100):(item.card.info.defaultPrice/100)}</span>
                        <p className="text-sm">{item.card.info.description}</p>
                    </div>

                    <div className="relative w-3/12">
                        <img className=" w-[156px] h-[144px] rounded-lg" src={MEDIA_ASSET_URL + item.card.info.imageId || CDN_URL + item.card.info.imageId} />
                        <button onClick={()=>addItemBtn(item)} className="absolute py-2 rounded-lg left-6 -bottom-5 z-10 px-8 bg-white border-2 border-gray-100 shadow-md">ADD</button>
                    </div>
                </div>
            ))
        }
    </div>
    )
}

export default ResCatItemList;