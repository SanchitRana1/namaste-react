import React from "react";
import { IMG_URL } from "../utils/constants";
export default function RestaurantCard({ resInfo }) {
  // console.log(res)
  return (
    <div data-testid="resCard" className="w-[12rem] space-y-1 p-1" key={resInfo?.id}>
      <img
        className="object-cover w-[12rem] h-[12rem] rounded-md"
        alt="res-logo"
        src={IMG_URL + resInfo?.cloudinaryImageId}
      ></img>
      <h3 className="p-1 font-bold text-lg">{resInfo?.name}</h3>
      <h4 className="font-semibold text-sm p-1">
        {resInfo?.cuisines?.join(" | ")}
      </h4>
      <div className="flex justify-between my-1">
        <span
          className={
            resInfo?.avgRatingString >= 4.5
              ? "rounded-lg bg-green-600 text-white px-1"
              : "rounded-lg bg-red-600 text-white px-1"
          }
        >
          {resInfo?.avgRatingString}
        </span>
        <span className="res-cost">{resInfo?.costForTwo}</span>
      </div>
    </div>
  );
}

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        {props?.resInfo?.avgRatingString > 4.2 && (
          <label className="p-1 m-[-0.2rem] absolute bg-gray-800 text-white rounded-e-md rounded-t-md">
            Trending
          </label>
        )}
        <RestaurantCard {...props} />
      </div>
    );
  };
};
