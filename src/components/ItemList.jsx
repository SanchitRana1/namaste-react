import React from "react";
import ItemCard from "./ItemCard";

export default function ItemList({ data }) {
  console.log(data);

  return (
    <div className="my-2">
      {data?.itemCards?.map((item) => (
        <ItemCard key={item.card.info.id} item={item} />
      ))}
      {data?.categories?.map((nestedItem) => (
        <div className="">
          <h2 className="my-1 font-semibold text-xl">{nestedItem?.title}</h2>

          {nestedItem?.itemCards?.map((item) => (
            <ItemCard key={item.card.info.id} item={item} />
          ))}
        </div>
      ))}
    </div>
  );
}
