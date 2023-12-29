import React from "react";
import ShoeCard from "../components/ShoeCard";
import { products } from "../constants";
import { star } from "../assets/icons";

const PopularProducts = () => {
  return (
    <div className="w-full mt-[200px]">
      <h1 className="text-4xl font-bold ">
        Our <span className="text-coral-red ">Popular</span> Products
      </h1>
      <p className="text-lg font-thin text-gray-900 my-10">
        Experience top-notch quality and style with our sought-after <br />{" "}
        selections. Discover a world of comfort, design, and value
      </p>
      <div className="flex items-center justify-between flex-wrap gap-3 w-full">
        {products.map((item) => (
          <div>
            <ShoeCard item={item} p={0} md={0} shoe={5} />
            <div className="flex items-center gap-2 my-2">
              <img src={star} alt="star" />
              <span className="text-lg font-medium">(4.5)</span>
            </div>
            <div className="my-2 text-xl font-bold">{item.name}</div>
            <div className="text-xl text-coral-red font-bold">{item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
