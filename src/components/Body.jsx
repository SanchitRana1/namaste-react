import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import useOnlineStatus from "../utils/useOnlineStatus";

export default function Body() {
  const [resName, setResName] = useState("");

  //getting fetched data from useRestaurantInfo hook 
  const {
    resList: [resList, setResList],
    allResData: [allResData, setAllResData],
  } = useRestaurantInfo();

  // filter Restaurants on search
  const resSearch = (e) => {
    e.preventDefault();
    if (resName.trim() !== "") {
      const resSearch = allResData.filter((item) => {
        const itemName = item.info.name.toLowerCase(),
          searchName = resName.toLowerCase().trim();
        return itemName.startsWith(searchName) || itemName.includes(searchName);
      });
      setResList(resSearch);
    } else {
      setResList(allResData);
    }
  };

  //filter Top Restaurants 
  const filterTop = (e) => {
    const { name } = e.target;
    if (name.includes("All")) {
      setResList(allResData);
    } else {
      const res = allResData.filter((item) => item.info.avgRating > 4.2);
      setResList(res);
    }
  };

  const onlineStatus = useOnlineStatus();
  if(!onlineStatus) {
    return <h1>Looks like you're Offline! Please check your internet connection.</h1>
  }


  return (
    <div className="body">
      <div className="m-2 p-2 flex justify-center">
        <form className="search-form" onSubmit={resSearch}>
          <input
          className="mx-2 border-solid rounded-full border-2 border-black"
            value={resName}
            onChange={(e) => {
              setResName(e.target.value);
            }}
          ></input>
          <button className="py-1 px-2 bg-green-600 hover:bg-green-700 text-white rounded-full" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="m-2 p-2 flex justify-center space-x-4">
        <button className="py-1 px-2 bg-red-600 hover:bg-red-700 text-white rounded-lg" name="filterTop" onClick={filterTop}>
          Top Restaurants
        </button>
        <button className="py-1 px-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg" name="filterAll" onClick={filterTop}>
          All Restaurants
        </button>
      </div>
      {resList?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className=" m-2 p-2 flex flex-wrap">
          {resList.map((item) => {
            return (
              <Link
                className="m-1 p-1 shadow-slate-200 shadow-lg hover:shadow-2xl hover:shadow-slate-400 cursor-pointer"
                key={item?.info?.id}
                to={"/restaurant/" + item?.info?.id}
              >
                <RestaurantCard resInfo={item?.info} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
