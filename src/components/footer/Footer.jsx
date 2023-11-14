import React from "react";
import { IconBrandFacebookFilled } from "@tabler/icons-react";
import { IconBrandTwitterFilled } from "@tabler/icons-react";
import { IconBrandInstagram } from "@tabler/icons-react";
import { IconBrandLinkedin } from "@tabler/icons-react";

const Footer = () => {
  return (
    <div className="w-screen h-[40vh] bg-gray-400  ">
      <div className="max-w-5xl mx-auto w-full h-full flex justify-between">
        <div className="flex justify-start items-start flex-col gap-2 my-auto">
          <h2 className="font-semibold uppercase">Categories</h2>
          <div className="flex flex-col text-gray-600 ">
            <span>Home</span>
            <span>Order</span>
            <span>Local or Vocal</span>
            <span>Cart</span>
          </div>
        </div>
        <div className="flex justify-start items-start flex-col gap-2 mt-[60px]">
          <h2 className="font-semibold uppercase">Customer Service</h2>
          <div className="flex flex-col text-gray-600 ">
            <span>Return Policy</span>
            <span>About</span>
            <span>Contact Us</span>
          </div>
        </div>
        <div className="flex justify-start items-start flex-col gap-2 mt-16">
          <h2 className="font-semibold uppercase">Services</h2>

          <span className="text-gray-600">Privecy</span>
        </div>

        <div className="lg:w-1/4 md:w-1/2 w-full mt-16 ">
          <img
            src="https://ecommerce-sk.vercel.app/pay.png"
            alt=""
            className="w-full"
          />
        </div>
      </div>
      <div className=" w-full h-[10vh] ">
        <div className="max-w-5xl mx-auto  flex justify-between w-full h-[10vh]">
          <div className="flex justify-center items-center">
            <h1>E-Bharat</h1>
            <p>© 2023 E-bharat —www.ebharat.com</p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <IconBrandFacebookFilled className=" text-gray-500" />
            <IconBrandTwitterFilled className=" text-gray-500" />
            <IconBrandInstagram className=" text-gray-500" />
            <IconBrandLinkedin className=" text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
