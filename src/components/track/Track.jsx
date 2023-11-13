import React from "react";
import { IconBriefcase } from "@tabler/icons-react";
import { IconTruck } from "@tabler/icons-react";
import { IconCoinRupee } from "@tabler/icons-react";

const Track = () => {
  return (
    <div className="w-screen mt-4">
      <div className="max-w-5xl mx-auto flex gap-5  rounded-md mt-9 ">
        <div className="flex flex-col justify-center items-center w-full border-gray-100 border-2 py-7 px-4 rounded-md shadow-md hover:scale-110 transition-scale-110  duration-300 ease-in-out">
          <IconBriefcase className="text-pink-600 mb-1 w-12 h-12  " />
          <h1 className="font-bold my-2">Premium Tshirt</h1>
          <h1 className="text-gray-400 text-sm">
            Our Tshirt are 100% made of cotton
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center  w-full  border-gray-100 border-2 py-7 px-4  rounded-md shadow-md hover:scale-110 transition-scale-110  duration-300 ease-in-out ">
          <IconTruck className="text-pink-600 mb-1  w-12 h-12  " />
          <h1 className="font-bold my-2">Free Shipping</h1>
          <h1 className="text-gray-400 text-sm">
            We ship all over India for FREE.
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center   w-full  border-gray-100 border-2 py-7 px-4  rounded-md shadow-md hover:scale-110 transition-scale-110  duration-300 ease-in-out">
          <IconCoinRupee className="text-pink-600 mb-1  w-12 h-12  " />
          <h1 className="font-bold my-2">Exciting Offers</h1>
          <h1 className="text-gray-400 text-sm">
            We provide amazing offers & discounts
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Track;
