import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

export default function RestaurantMenu() {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId); //custom hook created

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const menu = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  return (
    <div className="text-center">
      <h1 className="my-3 p-2 text-4xl font-bold">{name}</h1>
      <p className="my-1 px-2 text-2xl font-semibold">
        {cuisines.join(" | ")} - {costForTwoMessage}
      </p>

      {menu.map((menuItem) => {
        return (
          <div className="p-2">
              <RestaurantCategory key={menuItem?.card?.card?.title} data={menuItem?.card?.card}/>
          </div>
        );
      })}
    </div>
  );
}