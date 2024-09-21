import React from "react";

const Card = ({item}) => {
    console.log(item)
  return (
    <>
      <div className="mt-4 my-3 p-4">
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 border dark:bg-slate-900 dark:text-white">
          <figure>
            <img
              src={item.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">₹{" "}{item.price}</div>
              <div className="p-2 rounded-3xl border-[2px] cursor-pointer hover:bg-pink-500 hover:text-white">Buy</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
