import React from "react";
import ReactDOM from "react-dom/client";
import { FaReact, FaUserCircle } from "react-icons/fa";
import logo from "./isolated_hamburger_with_splash_ink_background.jpg";

//Header
// -logo
// -Nav Items
//Body
//-Search
//  -RestaurantContainer
//  -RestaurantCard : img , name, star rating, cuisine,

//Footer
// -Copyright
// -Links
// -ContactInfo

const Header = () => {
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
};

const RestruantCard = ({resName,resCuisine,resInfo}) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://www.solopress.com/blog/wp-content/uploads/2014/09/shutterstock_334960748.jpg"
      ></img>
      <h3 className="res-name">{resName}</h3>
      <h4 className="res-cuisine">{resCuisine}</h4>
      <div className="res-info">{resInfo}</div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestruantCard
          resName="Durga Food"
          resCuisine="North Indian, South Indian"
          resInfo="4.0 stars"
        />
        <RestruantCard
          resName="Lha Kitchen"
          resCuisine="Koream, chinese"
          resInfo="4.5 stars"
        />
      </div>
    </div>
  );
};

const AppComponent = () => {
  return (
    <div className="app">
      <Header />
      <Body></Body>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<AppComponent />);
