import React from "react";
import Layout from "../../components/layout/Layout";
import { Rating } from "@mantine/core";
import { IconBrandFacebookFilled } from "@tabler/icons-react";
import { IconBrandTwitterFilled } from "@tabler/icons-react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { IconHeartFilled } from "@tabler/icons-react";

const ProductInfo = () => {
  return (
    <Layout>
      <div className="w-screen h-screen  ">
        <div className="max-w-5xl mx-auto   flex gap-10 pt-4 pl-5 ">
          <img
            src="https://dummyimage.com/400x400/fff/aaa
"
            alt=""
            className="w-full h-full  rounded-2xl cursor-pointer hover:scale-110 transition-scale-110  duration-300 ease-in-out shadow-lg  "
          />

          <div className="flex flex-col w-full px-6 py-7 ">
            <h2 className="text-gray-400 text-lg uppercase">Brand Name</h2>
            <h1 className="font-bold text-3xl my-3"> The Catcher in the Rye</h1>
            <div className="flex gap-4 justify-start items-center ">
              <span>
                <Rating defaultValue={2} color="teal" />
              </span>
              <span>4 reviews</span>

              <div className="flex gap-1 border-l-2 border-gray-200 ml-1 ">
                <IconBrandFacebookFilled className="text-gray-500 ml-2" />
                <IconBrandTwitterFilled className="text-gray-500" />
                <IconBrandLinkedin className="text-gray-500" />
              </div>
            </div>
            <p className="py-8 border-b-2">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean shorts keytar banjo tattooed umami
              cardigan.
            </p>
            <div className="my-3 flex justify-between">
              <span className="font-bold text-lg"> $58.00</span>
              <div className="flex justify-center items-center gap-3">
                <button className="bg-indigo-500 py-2 px-3 rounded-md cursor-pointer ">
                  Add To Cart
                </button>
                <span className=" w-10 h-10  bg-gray-200 p-0 border-0 flex items-center justify-center text-gray-500 ml-4 rounded-full cursor-pointer ">
                  <IconHeartFilled className="text-gray-400" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductInfo;
