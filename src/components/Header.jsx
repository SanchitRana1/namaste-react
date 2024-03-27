import React, { useState } from 'react';
import logo from "../utils/isolated_hamburger_with_splash_ink_background.jpg";
import { Link } from 'react-router-dom';

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
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About Us</Link></li>
          <li><Link to={"/contact"}>Contact Us</Link></li>
          <li><Link to={"/"}>Cart</Link></li>
        </ul>
      </div>
    </div>
  );
}
