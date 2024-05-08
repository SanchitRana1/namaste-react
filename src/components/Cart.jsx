import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import { clearCart } from "../utils/cartSlice";

export default function Cart() {
  const cartItems = useSelector((store) => store?.cart?.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  
  return (
    <div>
      <h1 className="text-center m-4 p-4d text-2xl">Cart</h1>
      <div className="w-6/12 mx-auto  flex flex-col items-center cursor-pointer">
        <button
          className="my-2 p-2 w-100 bg-red-700 rounded-full text-white"
          onClick={handleClearCart}
        >
          Clear 🛒
        </button>
        {cartItems.length === 0
          ? <div className="m-2 p-2">Add something to the cart</div>
          : cartItems.map((item,index) => (
              <ItemCard key={item?.card?.info?.id+index} item={item}/>
            ))}
      </div>
    </div>
  );
}
