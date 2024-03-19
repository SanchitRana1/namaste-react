import React, { useState } from 'react';
import logo from "../utils/isolated_hamburger_with_splash_ink_background.jpg";

export default function Header() {
  const [toggleBtn, setToggleBtn] = useState(false)
  const toggle=()=>{
    setToggleBtn(!toggleBtn);
  }
return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}
