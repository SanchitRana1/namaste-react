import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

export default function Body() {
  const [resList, setResList] = useState([]);
  const [allResData, setAllResData] = useState([]);
  const [resName, setResName] = useState("");
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.572880&lng=77.209877&collection=83667"
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
      {resList.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="res-container">
          {resList.map((item) => {
            return <RestaurantCard resInfo={item?.info} />;
          })}
        </div>
      )}
    </div>
  );
}
