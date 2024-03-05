import React from "react";
import ReactDOM from "react-dom/client";
import { FaReact, FaUserCircle } from "react-icons/fa";

//Header

const Header=()=>{
    return (
        <div id="header" className="header">
            <FaReact id="logo" size={30}/>
            <input id="search"></input>
            <FaUserCircle id="user" size={30}/>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Header />);
