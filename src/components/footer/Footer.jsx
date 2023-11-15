import React from "react";
import { IconBrandFacebookFilled } from "@tabler/icons-react";
import { IconBrandTwitterFilled } from "@tabler/icons-react";
import { IconBrandInstagram } from "@tabler/icons-react";
import { IconBrandLinkedin } from "@tabler/icons-react";

const Footer = () => {
  return (
    <div className="bg-gray-300 w-screen">
      <div className="max-w-5xl mx-auto w-full flex justify-between py-20">
        <div className="flex flex-col">
          <h2 className="my-1 uppercase font-bold">Categories</h2>
          <span className="text-gray-500">Home</span>
          <span className="text-gray-500">Order</span>
          <span className="text-gray-500">Local or Vocal</span>
          <span className="text-gray-500"> Cart</span>
        </div>
        <div className="flex flex-col">
          <h2 className="my-1 font-bold uppercase">customer services</h2>
          <span className="text-gray-500">Return Policy</span>
          <span className="text-gray-500">About</span>
          <span className="text-gray-500">Contact Us</span>
        </div>
        <div className="flex flex-col">
          <h2 className="my-1 font-bold uppercase">services</h2>
          <span className="text-gray-500">Privecy</span>
        </div>
        <div className="w-1/4">
          <img src="https://ecommerce-sk.vercel.app/pay.png" alt="" />
        </div>
      </div>
      <div className="bg-gray-50 w-screen">
        <div className="max-w-5xl mx-auto w-full  flex justify-between py-4">
          <div className="flex items-center gap-3 ">
            <h2 className="font-bold text-2xl">E-Bharat</h2>
            <p className="text-gray-500">
              © 2023 E-bharat —
              <a href="https://twitter.com/knyttneve">www.ebharat.com</a>
            </p>
          </div>
          <div className="flex justify-center items-center gap-2 cursor-pointer">
            <IconBrandFacebookFilled className="text-gray-400" />
            <IconBrandTwitterFilled className="text-gray-400" />
            <IconBrandInstagram className="text-gray-400" />
            <IconBrandLinkedin className="text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
