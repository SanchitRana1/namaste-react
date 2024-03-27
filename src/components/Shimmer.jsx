import React from "react";
import RestruantCard from "./RestaurantCard";

export default function Shimmer() {
  return (
    <div className="shimmer-container">
      <div className="res-list-container">
        <RestruantCard></RestruantCard>
      </div>
      <div className="res-list-container">
        <RestruantCard></RestruantCard>
      </div>
      <div className="res-list-container">
        <RestruantCard></RestruantCard>
      </div>
      <div className="res-list-container">
        <RestruantCard></RestruantCard>
      </div>
      <div className="res-list-container">
        <RestruantCard></RestruantCard>
      </div>
      <div className="res-list-container">
        <RestruantCard></RestruantCard>
      </div>
      <div className="res-list-container">
        <RestruantCard></RestruantCard>
      </div>
      <div className="res-list-container">
        <RestruantCard></RestruantCard>
      </div>
    </div>
  );
}
