import React, { useState } from "react";
import { bigShoe1 } from "../assets/images";
import { shoes, statistics } from "../constants";
import { arrowRight } from "../assets/icons";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [shoe, setShoe] = useState(bigShoe1);

  const handleClick = (value) => {
    setShoe(value);
    console.log(value);
  };
  return (
    <section className="my-16 w-full flex flex-wrap">
      <div className="w-full xl:w-1/2">
        <p className="text-xl font-medium text-coral-red">
          Our Summer collections
        </p>
        <h1 className="font-bold my-10 text-[60px] md:text-[80px] lg:text-8xl">
          <span className="flex-nowrap xl:absolute xl:pr-5 xl:bg-white">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red">Nike</span> Shoes
        </h1>
        <p className="font-normal text-xl text-gray-600  my-5">
          Discover stylish Nike arrivals,
          <br /> quality comfort, and innovation for your active life.
        </p>
        <button className="flex items-center justify-between w-40 rounded-full font-medium my-14 bg-coral-red text-white py-3 px-7">
          <span>Shop Now</span>
          <img src={arrowRight} alt="arrowRight" />
        </button>
        <div className="my-7 flex flex-wrap justify-between gap-10 pr-10">
          {statistics.map((item) => (
            <div>
              <h1 className=" text-4xl font-bold">{item.value}</h1>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-full static xl:w-1/2 ">
        <div className="bg-hero bg-center bg-cover flex items-center static lg:absolute lg:top-0 lg:-z-10">
          <img src={shoe} alt="bigShoe1" className="object-contain py-16" />
        </div>
        <div className="relative">
          <div className=" w-full absolute -bottom-[80px] lg:-bottom-[550px] flex flex-row gap-2 items-center justify-center mx-auto">
            {shoes.map((item) => (
              <ShoeCard
                handleClick={handleClick}
                item={item}
                shoe={shoe}
                p={2}
                md={5}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
