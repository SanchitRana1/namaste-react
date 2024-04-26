import React, { useContext, useState } from 'react';
import logo from "../utils/isolated_hamburger_with_splash_ink_background.jpg";
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

export default function Header() {

  const onlineStatus = useOnlineStatus();
  const status=onlineStatus ? "green" : "red"; 

  const {loggedInUser} = useContext(UserContext)
  // console.log(data)

return (
    <div className="flex justify-between shadow-md">
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
          <li><Link to={"/"}>Cart</Link></li>
          <li style={{backgroundColor:status, borderRadius:"1rem", width:"1rem",height:"1rem"}}/>
          <li className='font-bold'>{loggedInUser}</li>
          
        </ul>
      </div>
    </div>
  );
}
