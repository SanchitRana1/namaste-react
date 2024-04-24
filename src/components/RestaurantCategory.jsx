import React, { useState } from "react";
import ItemList from "./ItemList";

export default function RestaurantCategory({ data }) {
  const [showItems, setShowItems] = useState(false);
  function handleClick() {
    setShowItems((preval) => !preval);
  }

  return (
    <div>
      {data?.["@type"].includes("ItemCategory") && (
        <div className=" w-6/12 bg-gray-100 shadow-lg text-center mx-auto my-2 p-3 ">
          <div
            className="flex justify-between cursor-pointer"
            onClick={handleClick}
          >
            <span className="font-bold text-lg">
              {data?.title && data?.title}{" "}
              {data?.itemCards?.length > 0 &&
                "(" + data?.itemCards?.length + ")"}{" "}
            </span>
            <span>{!showItems ? "▼" : "▲"}</span>
          </div>
          {showItems && <ItemList data={data} />}
        </div>
      )}
    </div>
  );
}
