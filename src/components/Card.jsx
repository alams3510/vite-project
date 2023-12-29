import React from "react";

const Card = ({ item }) => {
  console.log(item);
  return (
    <div className="flex flex-col justify-start w-full sm:w-[360px] sm:min-w-[350px] rounded-[20px] shadow-3xl px-10 py-16 p-10 ">
      <div className="bg-coral-red w-11 h-11 rounded-full flex items-center justify-center">
        <img src={item.imgURL} alt="imgURL" />
      </div>
      <h1 className="text-[30px] font-bold my-2">{item.label}</h1>
      <p className="text-[20px] font-thin">{item.subtext}</p>
    </div>
  );
};

export default Card;
