import React from "react";
import { IMG_URL } from "../utils/constants";
export default function RestruantCard({ resInfo }) {
  return (
    <div className="res-card" key={resInfo.id}>
      <img
        className="res-logo"
        alt="res-logo"
        src={IMG_URL + resInfo.cloudinaryImageId}
      ></img>
      <h3 className="res-name">{resInfo.name}</h3>
      <h4 className="res-cuisine">{resInfo.cuisines.join(" | ")}</h4>
      {/* <div className="res-cost">{resInfo.costForTwo}</div> */}
      <div className="res-info">
        <span className="res-rating">{resInfo.avgRatingString}</span>
        <span className="res-cost">{resInfo.costForTwo}</span>  
      </div>
    </div>
  );
}
