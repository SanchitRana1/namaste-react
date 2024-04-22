import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

export default function RestaurantMenu() {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId); //custom hook created

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards, title } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card;

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(" | ")} - {costForTwoMessage}
      </p>
      <h2>{title}</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
}
