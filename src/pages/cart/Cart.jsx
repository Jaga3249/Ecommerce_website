import React from "react";
import Layout from "../../components/layout/Layout";
import { IconTrash } from "@tabler/icons-react";
import {
  Modal,
  Modals,
  OrderDetails,
} from "../../components/modals/OrderDetails";

const Cart = () => {
  return (
    <Layout>
      <div className="w-screen h-screen bg-slate-200 ">
        <div className="max-w-5xl mx-auto object-contain flex justify-center items-center flex-col    ">
          <h1 className=" font-bold text-xl mt-7 ">Cart Items</h1>
          <div className="w-full   flex gap-4 px-5 py-10 ">
            <div
              className=" flex justify-between  w-[70%] border-3 border-x-white border-y-white 
            bg-white rounded-lg shadow-md cursor-pointer px-7 py-4 "
            >
              <div className="flex gap-3 ">
                <img
                  src="https://dummyimage.com/200x100/fff/aaa"
                  alt=""
                  className="bg-gray-500 border-2 border-gray-500 rounded-md"
                />
                <div className="flex flex-col  justify-start ">
                  <p className="font-bold text-lg w-28 ">This is title</p>
                  <span className="font-semibold">desc</span>
                  <span className="text-gray-500">₹100</span>
                </div>
              </div>
              <IconTrash />
            </div>
            <div className="flex flex-col  w-[30%] bg-white  rounded-md shadow-md px-5 py-6">
              <div className="flex justify-between">
                <span className="text-gray-800 font-semibold">SubTotal</span>
                <span className="text-gray-500">₹100</span>
              </div>
              <div className="flex justify-between my-2">
                <span className="text-gray-800 font-semibold">Shipping</span>
                <span className="text-gray-500">₹100</span>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between">
                <span className="text-gray-800 font-bold">Total</span>
                <span className="text-gray-500">₹100</span>
              </div>
              {/* <button className=" bg-violet-600 py-2 w-full my-2 rounded-md">
                Buy Now
              </button> */}
              <OrderDetails />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
