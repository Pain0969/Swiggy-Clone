import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../Utils/useOnlineStatus'
import { useSelector } from 'react-redux';


const Navbar = () => {
  const [loginbtn, setloginbtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  function loginbtnHandler(){
    loginbtn === "Login" ? (setloginbtn("LogOut")) : (setloginbtn("Login"));
  }

  const cartItems = useSelector((store)=>store.cart.items);
  console.log(cartItems);
  
  return (
    <div className='flex shadow-lg z-[1000] px-5'>
        <div className='relative flex mx-auto max-w-[1200px] min-w-[1200px] h-20 justify-between border-black border-5'>
          <div className=''>
              <img src='https://assets.materialup.com/uploads/61d86780-be13-47fa-81a6-226aac22db27/preview.jpg' width={107}/>
          </div>
          <div className='my-auto '>
              <ol className='flex  gap-20 '>
                  <li>Online status:{
                    onlineStatus ? "✅" : "🔴"
                  }</li>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/About">About us</Link></li>
                  <li><Link to="/ContactUs">Contact us</Link></li>
                  <li><Link to="/LoginPage">Login</Link></li>
                  <li><Link to="/cart">Cart-({cartItems.length})</Link></li>
              </ol>
          </div>
          <div className=''>
            <button className='border-2 border-black p-2 rounded-md bg-blue-200 hover:bg-blue-400' onClick={loginbtnHandler}>
              {loginbtn}
            </button>
          </div>
        </div>
    </div>
  )
}

export default Navbar;