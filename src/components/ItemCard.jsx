import React from "react";
import { IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

export default function ItemCard({ item}) {
  const dispatch = useDispatch();
  
  //adding selected item to cart 
  const handleAddItem = (item) => {
    // Dispatch an action
    // console.log(item);
    dispatch(addItem(item));
  };

  //removing selected item from cart
  const handleDeleteItem = (item) => {
    // Dispatch an action
    // console.log(item);
    dispatch(removeItem(item));
  };

  return (
    <div data-testid ="item-card" className="p-2 flex border-gray-400 border-b-2 text-left justify-between">
      <div className="w-8/12">
        <span className="font-semibold">{item?.card?.info?.name}</span>
        <span>
          {" "}
          - ₹
          {item.card.info.price
            ? item?.card?.info?.price / 100
            : item?.card?.info?.defaultPrice / 100}
        </span>
        <p className="text-xs text-left">{item?.card?.info?.description}</p>
      </div>
      <div className="w-4/12 m-1">
        <div className="flex-col rounded-md overflow-hidden justify-center items-center">
          <img
            className="object-contain h-100 w-100 rounded-md"
            alt="dish-logo"
            src={IMG_URL + item?.card?.info?.imageId}
          />
        </div>
        {/* {url === "menu" ? 
         <button
         onClick={() => handleAddItem(item)}
         className=" shadow-md my-[-5] w-full text-sm p-1 bg-green-700 text-white z-10  cursor-pointer bottom-0 rounded-sm"
       >
         Add+
       </button> :
        <button
        onClick={() => handleDeleteItem(item)}
        className=" shadow-md my-[-5] w-full  text-sm p-1 bg-red-700 text-white z-10  cursor-pointer bottom-0 rounded-sm"
      >
        Delete
      </button>
      } */}
       <button
         onClick={() => handleAddItem(item)}
         className=" shadow-md my-[-5] w-full text-sm p-1 bg-green-700 text-white z-10  cursor-pointer bottom-0 rounded-sm"
       >
         Add+
       </button>
       
      </div>
    </div>
  );
}
