import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#fbf0e4] pt-4 px-16 grid grid-cols-2 place-items-center">
      <div className=" flex flex-col gap-6 justify-center items-start">
        <h1 className="text-5xl font-bold w-[90%] text-green-800 leading-tight">
          Grab Upto 50% Off On Selected Headphone
        </h1>
        <button className="py-2 px-6 bg-green-800 text-white rounded-full">
          Buy Now
        </button>
      </div>
      <div className="">
        <Image
          className="w-80"
          src="/assets/images/banner.png"
          alt="logo"
          width="0"
          height="0"
          sizes="100vw"
        />
      </div>
    </div>
  );
};

export default Banner;
