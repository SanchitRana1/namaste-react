import React from "react";
import { IMG_URL } from "../utils/constants";

export default function ItemCard({ item }) {
  // console.log(item)
  return (
    <div className="p-2 flex border-gray-400 border-b-2 text-left justify-between">
      <div className="w-8/12">
        <span className="font-semibold">{item?.card?.info?.name}</span>
        <span>
          {" "} - ₹
          {item.card.info.price
            ? item?.card?.info?.price / 100
            : item?.card?.info?.defaultPrice / 100}
        </span>
        <p className="text-xs text-left">{item?.card?.info?.description}</p>
      </div>
      <div className="w-4/12 m-1">
        <div className="flex-col rounded-md overflow-hidden justify-center items-center">
        <img
          className="object-contain h-100 w-100 rounded-md"
          alt="dish-logo"
          src={IMG_URL + item?.card?.info?.imageId}
        />
        </div>
        <button className=" shadow-md my-[-5]  text-sm p-1 bg-green-700 text-white z-10  cursor-pointer bottom-0 rounded-sm">
          Add+
        </button>
      </div>
    </div>
  );
}
