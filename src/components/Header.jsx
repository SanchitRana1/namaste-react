import React, { useContext, useState } from 'react';
import logo from "../utils/isolated_hamburger_with_splash_ink_background.jpg";
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';


export default function Header() {

  const onlineStatus = useOnlineStatus();
  const status=onlineStatus ? "green" : "red"; 

  //getting logged user name
  const {loggedInUser} = useContext(UserContext);

  //subscribing to the store using Selector hoor
const cart = useSelector((store)=>store.cart.items)

return (
    <div className="flex justify-between shadow-md sticky top-0 bg-slate-100">
      <div className="logo-container">
        <img className="w-12" src={logo}></img>
      </div>
      <div className="flex items-center">
        <ul className='flex items-center space-x-4 px-4'>
          <li><Link to={"/"}>Home</Link></li>
          
          <li><Link to={"/test"}>Test</Link></li>
          <li><Link to={"/about"}>About Us</Link></li>
          <li><Link to={"/contact"}>Contact Us</Link></li>
          <li><Link to={"/grocery"}>Grocery</Link></li>
          <li><Link to={"/cart"} className='font-bold'>🛒<span className='text-green-500'>({cart.length})</span></Link></li>
          <li style={{backgroundColor:status, borderRadius:"1rem", width:"1rem",height:"1rem"}}/>
          <li className='font-bold'>{loggedInUser}</li>
          
        </ul>
      </div>
    </div>
  );
}
