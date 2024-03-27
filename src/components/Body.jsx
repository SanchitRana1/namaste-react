import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RES_API } from "../utils/constants";

export default function Body() {
  const [resList, setResList] = useState([]);
  const [allResData, setAllResData] = useState([]);
  const [resName, setResName] = useState("");

  //fetching Restaurant data for Home page 
  const fetchData = async () => {
    const data = await fetch(
      RES_API,
      {
        headers: {
          "x-cors-api-key": "temp_b9819b3f7d329ecffa3283a05aea9d7c",
        },
      }
    );
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

  const filterTop = (e) => {
    const { name } = e.target;
    if (name.includes("All")) {
      setResList(allResData);
    } else {
      const res = allResData.filter((item) => item.info.avgRating > 4.2);
      setResList(res);
    }
  };

  return (
    <div className="body">
      <div className="search">
        <form className="search-form" onSubmit={resSearch}>
          <input
            value={resName}
            onChange={(e) => {
              setResName(e.target.value);
            }}
          ></input>
          <button className="btn-search" type="submit">
            Search
          </button>
        </form>
      </div>

      <div className="filter">
        <button className="filter-btn" name="filterTop" onClick={filterTop}>
          Top Restaurants
        </button>
        <button className="filter-btn" name="filterAll" onClick={filterTop}>
          All Restaurants
        </button>
      </div>
      {resList?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="res-container">
          {resList.map((item) => {
            return (
              <Link className="res-list-container" key={item?.info?.id} to={"/restaurant/" + item?.info?.id}>
                <RestaurantCard resInfo={item?.info} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
