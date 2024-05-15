import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Utils/cartSlice";
import { removeItem } from "../Utils/cartSlice";
import React, { useState } from "react";

const Cart = () => {
    
    const cartItems = useSelector((store)=>store.cart.items);
    console.log("cartItems:", cartItems);

    const [cartItemsWithQuantity, setCartItemsWithQuantity] = useState(
        cartItems.map(item => ({ ...item, quantity: 1 }))
    );
    
    // console.log(cartItemsWithQuantity);
    const dispatch = useDispatch();

    const handleClearCart=()=>{
        dispatch(clearCart());
        setCartItemsWithQuantity([]);
    };
    
    const increaseQuantity = (index) => {
        setCartItemsWithQuantity(prevState => {
            const updatedCartItems = [...prevState];
            updatedCartItems[index].quantity += 1;
            return updatedCartItems;
        });
    };

    const decreaseQuantity = (index) => {
        setCartItemsWithQuantity(prevState => {
            const updatedCartItems = [...prevState];
            if (updatedCartItems[index].quantity > 1) {
                updatedCartItems[index].quantity -= 1;
            }
            return updatedCartItems;
        });
    };

    const calculateTotalCost = () => {
        return cartItemsWithQuantity.reduce((total, item) => {
            return total + (item.card.info.price * item.quantity);
        }, 0);
    };

    return (
        <div className="w-9/12 flex justify-between mx-auto border-2 border-black relative">
            <div className="w-7/12 p-5 space-y-5">
                <div className="space-y-5">
                    <div className="p-5">
                        <h2 className="font-bold">Account</h2>
                        <p className="text-slate-500">To place your order now, log in to your existing account or sign up.</p>
                    </div>
                    <div className="flex ">
                        <button className="border-2 border-green-500">
                            <p className="text-green-500">Have an account?</p>
                            <p className="font-bold text-green-500">LOG IN</p>
                        </button>
                        <button className="bg-green-500 border-2 border-green-600">
                            <p className="text-white">New to Swiggy?</p>
                            <p className="font-bold text-white">SIGN UP</p>
                        </button>
                    </div>
                </div>
                <div className="p-10 border-2 border-black">Delivery address</div>
                <div className="p-10 border-2 border-black">Payment</div>
                <div></div>
            </div>
            <div className="w-4/12 p-5 border-2 border-black">
                <div className="border-2 border-black">
                    <img/>
                    <div>
                        <h2>Restaurant name</h2>
                        <p>Location</p>
                    </div>
                </div>
                <div className=" border-2 border-black ">
                    {
                        cartItemsWithQuantity.map((item, index)=>{
                            return (<div key={item.card.info.id} className="flex justify-between">
                            <p>
                                {item.card.info.name}
                            </p>
                            <div className="flex border-2 border-black">
                                <button onClick={()=>decreaseQuantity(index)}>-</button>
                                <p>{item.quantity}</p>
                                <button onClick={()=>increaseQuantity(index)}>+</button>
                            </div>
                            <p>{item.card.info.price * item.quantity /100}</p>
                            </div>)
                        })
                    }
                </div>
                <div className="text-center">
                    <button className="border-2 border-green-600 bg-green-500 text-white"
                    onClick={handleClearCart}>Clear Cart</button>
                </div>
                <div className="text-center border-2 border-black">
                    <textarea placeholder="Any suggestions? We will pass it on..." className="border-2 border-black"></textarea>
                </div>
                <div className="border-2 border-black">
                    <input type="checkbox" id="No-contactDelivery"/>
                    <label htmlFor="No-contactDelivery">Opt in for No-contact Delivery</label><br/>
                    <label htmlFor="No-contactDelivery" className="text-slate-400">Unwell, or avoiding contact? Please select no-contact delivery. Partner will safely place the order outside your door (not for COD)</label>
                </div>
                <div className="border-2 border-black">
                    <h4>Bill Details</h4>
                    <div className="flex justify-between">
                        <p>Item Total</p>
                        <p>Value</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Delivery Fee | 2.0 kms</p>
                        <p>Value</p>
                    </div>
                    <div className="border-2 border-black"></div>
                    <div className="flex justify-between">
                        <p>Delivery Tip</p>
                        <p>Add tip</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Platform fee</p>
                        <p>Value</p>
                    </div>
                    <div className="flex justify-between">
                        <p>GST and Restaurant Charges</p>
                        <p>Value</p>
                    </div>
                    <div className="border-2 border-black"></div>
                </div>
                <div className="flex justify-between">
                    <p>TO PAY</p>
                    <p>Value</p>
                </div>
            </div>
        </div>
    )
}

export default Cart;