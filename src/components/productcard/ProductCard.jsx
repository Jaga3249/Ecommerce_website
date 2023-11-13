import React from "react";

const ProductCard = () => {
  return (
    <div className="w-screen flex justify-start flex-col  ">
      <div className=" max-w-5xl m-auto w-full ">
        <h1 className="text-2xl mb-2 font-bold">Our Latest Collections</h1>
        <div class="h-1 w-28 bg-pink-600 rounded mb-5"></div>

        <div className="w-full  flex gap-4">
          <div className="w-full  shadow-lg p-3 rounded-md flex flex-col">
            <img
              src="https://dummyimage.com/200"
              alt=""
              className="hover:scale-110 transition-scale-110  duration-300 ease-in-out rounded-md mb-2 "
            />

            <div className="flex flex-col gap-1 w-full py-2">
              <h2>E-Bharat</h2>
              <h1 className="font-bold">This is the title</h1>
              <p>₹500</p>
              <div className="  p-2 my-2 bg-pink-600 hover:bg-pink-700   rounded-lg  flex justify-center items-center focus:outline-none">
                <button>Add To Cart</button>
              </div>
            </div>
          </div>
          <div className="w-full   shadow-lg p-3 rounded-md flex flex-col">
            <img
              src="https://dummyimage.com/200"
              alt=""
              className="hover:scale-110 transition-scale-110  duration-300 ease-in-out rounded-md mb-2"
            />

            <div className="flex flex-col gap-1 w-full py-2">
              <h2>E-Bharat</h2>
              <h1 className="font-bold">This is the title</h1>
              <p>₹500</p>
              <div className=" my-2  p-2 bg-pink-600 hover:bg-pink-700   rounded-lg flex justify-center items-center focus:outline-none">
                <button>Add To Cart</button>
              </div>
            </div>
          </div>
          <div className="w-full   shadow-lg p-3 rounded-md flex flex-col">
            <img
              src="https://dummyimage.com/200"
              alt=""
              className="hover:scale-110 transition-scale-110  duration-300 ease-in-out rounded-md mb-2"
            />

            <div className="flex flex-col gap-1 w-full py-2">
              <h2>E-Bharat</h2>
              <h1 className="font-bold">This is the title</h1>
              <p>₹500</p>
              <div className=" my-2  p-2 bg-pink-600 hover:bg-pink-700   rounded-lg flex justify-center items-center focus:outline-none">
                <button>Add To Cart</button>
              </div>
            </div>
          </div>
          <div className="w-full   shadow-lg p-3 rounded-md flex flex-col">
            <img
              src="https://dummyimage.com/200"
              alt=""
              className="hover:scale-110 transition-scale-110  duration-300 ease-in-out rounded-md mb-2"
            />

            <div className="flex flex-col gap-1 w-full py-2">
              <h2>E-Bharat</h2>
              <h1 className="font-bold">This is the title</h1>
              <p>₹500</p>
              <div className=" my-2  p-2 bg-pink-600 hover:bg-pink-700   rounded-lg flex justify-center items-center focus:outline-none">
                <button>Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
