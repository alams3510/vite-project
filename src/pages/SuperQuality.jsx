import React from "react";
import { shoe8 } from "../assets/images";
import Card from "../components/Card";
import { services } from "../constants";

const SuperQuality = () => {
  return (
    <div className="mt-[100px] w-full">
      <div className=" flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex flex-col pr-20">
          <h1 className="text-4xl font-semibold ">
            We Provide You <span className="text-coral-red">Super Quality</span>{" "}
            Shoes
          </h1>
          <p className="text-xl text-gray-800 mt-10 ">
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance.
          </p>
          <br />
          <p className="text-xl text-gray-800 my-5 ">
            Our dedication to detail and excellence ensures your satisfaction
          </p>
          <button className="flex items-center justify-between w-40 rounded-full font-medium my-14 bg-coral-red text-white py-3 px-7">
            <span>View Details</span>
          </button>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src={shoe8}
            alt="product detail"
            width={570}
            height={522}
            className="object-contain"
          />
        </div>
      </div>
      <div className="my-20 flex gap-4 flex-wrap justify-between w-full">
        {services.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </div>
  );
};

export default SuperQuality;
