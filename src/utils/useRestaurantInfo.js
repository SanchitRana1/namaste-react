import React, { useEffect, useState } from "react";
import { RES_API } from "./constants";

export default function useRestaurantInfo() {
    const [resList, setResList] = useState([]);
    const [allResData, setAllResData] = useState([]);

  //fetching Restaurant data for Home page
  const fetchData = async () => {
    const data = await fetch(RES_API, {
      headers: {
        "x-cors-api-key": "temp_b9819b3f7d329ecffa3283a05aea9d7c",
      },
    });
    const jsonData = await data.json();
    setAllResData(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setResList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };


  useEffect(() => {
    fetchData();
  }, []);

  return {resList:[resList,setResList],allResData:[allResData,setAllResData]};
}
