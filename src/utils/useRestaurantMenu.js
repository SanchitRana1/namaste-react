import React, { useEffect, useState } from "react";
import { MENU_API } from "./constants";

export default function useRestaurantMenu(resId) {
    
  const [resInfo, setResInfo] = useState(null);
  

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId, {
      headers: {
        "x-cors-api-key": "temp_b9819b3f7d329ecffa3283a05aea9d7c",
      },
    });
    const json = await data.json();
    setResInfo(json?.data);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return resInfo;
}
