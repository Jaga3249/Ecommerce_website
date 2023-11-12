import React from "react";

const ProductCard = () => {
  return (
    <div className="w-screen flex justify-start flex-col  ">
      <div className=" max-w-5xl m-auto w-full ">
        <div className="mb-8 ">
          <h1 className="text-2xl mb-2 font-bold">Our Latest Collections</h1>
          <div class="h-1 w-28 bg-pink-600 rounded"></div>
        </div>
        <div className="flex">
          <img src="https://dummyimage.com/200" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
