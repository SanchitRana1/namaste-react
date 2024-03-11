import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

export default function Body() {
  const [resData, setResData] = useState([]);
  const [allResData, setAllResData] = useState([]);
  const [resName, setResName] = useState("");
  const fetchData = () => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.572880&lng=77.209877&collection=83667",
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((data) => {
      data = data.json().then((item) => {
        setAllResData( item.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setResData(item.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      });
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const resSearch = (e) => {
    e.preventDefault();
    if(resName.trim() !== ""){
      const resSearch = allResData.filter((item) => {
        const itemNames = item.info.name.toLowerCase(), searchName = resName.toLowerCase().trim()
        return itemNames.includes(searchName);
      });
      setResData(resSearch)
    }
    else{
      setResData(allResData);
    }
    
  };

  const filterTop = (e) => {
    const { name } = e.target;
    if (name.includes("All")) {
      setResData(allResData);
    } else {
      const res = allResData.filter((item) => item.info.avgRating > 4.2);
      setResData(res);
    }
  };

  return (
    <div className="body">
      <div className="search">
        <form className="search-form" onSubmit={resSearch}>
          {/* Input field */}
          <input
            value={resName}
            onChange={(e) => setResName(e.target.value)}
          ></input>
          {/* Submit button */}
          <button className="btn-search" type="submit">Search</button>
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
      <div className="res-container">
        {resData.length > 0 ? (
          resData.map((item) => {
            return <RestaurantCard resInfo={item.info} />;
          })
        ) : (
          <div className="loader">Loading Data</div>
        )}
      </div>
    </div>
  );
}
