import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

export default function RestaurantMenu() {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const { resId } = useParams();
  //   console.log(MENU_API)

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId, {
      headers: {
        "x-cors-api-key": "temp_b9819b3f7d329ecffa3283a05aea9d7c",
      },
    });
    const json = await data.json();
    setResInfo(json?.data);
  };

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
