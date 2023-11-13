import React from "react";

const TestMonial = () => {
  return (
    <div className="w-screen mt-7">
      <div className="max-w-5xl mx-auto w-full  px-10 py-7">
        <div className="flex justify-center items-center flex-col  my-7">
          <h1 className="font-bold text-3xl">Testimonial</h1>
          <p className="text-gray-300 font-medium text-2xl">
            What our <span className="text-pink-500">customers</span> are saying{" "}
          </p>
        </div>

        <div className="flex gap-7 justify-start ">
          <div className="flex  flex-col">
            <div className="flex justify-center items-center mb-3">
              <img
                src="https://ecommerce-sk.vercel.app/img/kamal.png"
                alt=""
                className="w-16 cursor-pointer "
              />
            </div>
            <p className="text-sm text-gray-800 text-center ">
              Edison bulb retro cloud bread echo park, helvetica stumptown
              taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
              ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
              adaptogen squid fanny pack vaporware.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4 mx-auto" />

            <h1 className="text-center font-bold">Kamal Nayan Upadhyay</h1>
            <p className="text-center text-sm text-gray-500">
              Senior Product Designer
            </p>
          </div>
          <div className="flex  flex-col">
            <div className="flex justify-center items-center mb-3">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png"
                alt=""
                className="w-16 cursor-pointer bg-slate-400 rounded-full  "
              />
            </div>
            <p className="text-sm text-gray-800 text-center ">
              Edison bulb retro cloud bread echo park, helvetica stumptown
              taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
              ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
              adaptogen squid fanny pack vaporware.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4 mx-auto" />

            <h1 className="text-center font-bold">React Js</h1>
            <p className="text-center text-sm text-gray-500">UI Develeoper</p>
          </div>
          <div className="flex  flex-col">
            <div className="flex justify-center items-center mb-3">
              <img
                src="https://webknudocs.vercel.app/logo/react.png"
                alt=""
                className="w-16 cursor-pointer "
              />
            </div>
            <p className="text-sm text-gray-800 text-center ">
              Edison bulb retro cloud bread echo park, helvetica stumptown
              taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
              ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
              adaptogen squid fanny pack vaporware.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4 mx-auto" />

            <h1 className="text-center font-bold">React Js</h1>
            <p className="text-center text-sm text-gray-500">CTO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestMonial;
