import React, { useContext, useState } from "react";
import flag from "../../assets/india-flag.png";
import header_logo from "../../assets/header-logo.png";
import { LuShoppingCart } from "react-icons/lu";
import { FiSun } from "react-icons/fi";
import { BsFillSunFill } from "react-icons/bs";
import { VscThreeBars } from "react-icons/vsc";

import { mycontext } from "../../context/data/MyContext";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const { mode, setMode } = useContext(mycontext);
  const [open, setOpen] = useState(false);

  const handleToggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    document.body.style.backgroundColor =
      newMode === "dark" ? "rgb(17, 24, 39)" : "white";
  };
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="flex flex-col bg-red-400 sticky top-0 z-50">
      <p className="bg-[#83A2FF] p-2 text-center text-white  ">
        Get free delivery on orders over ₹300
      </p>
      <div className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto p-4 flex items-center justify-between">
          <VscThreeBars className="lg:hidden sm:block" onClick={handleOpen} />
          <p
            className="text-lg font-medium cursor-pointer"
            onClick={() => navigate("/")}
          >
            E-BHARAT
          </p>
          <div className="flex items-center gap-5 font-medium cursor-pointer">
            <span className="hidden md:block">All Products</span>
            <span
              onClick={() => navigate("/order")}
              className="hidden md:block"
            >
              Order
            </span>
            <span
              onClick={() => navigate("/dashboard")}
              className="hidden md:block"
            >
              Admin
            </span>
            <span className="hidden md:block">Logout</span>

            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2 ">
                <img
                  src={flag}
                  alt="Flag"
                  className="w-9 cursor-pointer hidden lg:block"
                />
                <span className="hidden lg:block">INDIA</span>
              </span>
              <span className="hidden lg:block">
                <img
                  src={header_logo}
                  alt="Logo"
                  className="w-9 cursor-pointer bg-white"
                />
              </span>
              <span onClick={handleToggleMode}>
                {mode === "dark" ? (
                  <BsFillSunFill className="cursor-pointer text-2xl" />
                ) : (
                  <FiSun className="cursor-pointer text-2xl" />
                )}
              </span>
              <span>
                <LuShoppingCart className="cursor-pointer text-2xl relative" />
                <div className="absolute bg-gray-200 w-3 px-3 flex justify-center items-center rounded-full lg:top-11 lg:right-28 top-[38px] right-2 ">
                  1
                </div>
              </span>
            </div>
          </div>
        </div>
        {open && (
          <div className="flex flex-col items-start p-4 gap-3 w-[90%] cursor-pointer  shadow-md lg:hidden">
            <div className="lg:hidden flex flex-col justify-center items-start gap-3 mb-2 w-full  ">
              <span>All Products</span>
              <span>order</span>
              <span>Admin</span>
              <span>Logout</span>
              <span className="lg:hidden">
                <img
                  src={header_logo}
                  alt="Logo"
                  className="w-9 cursor-pointer bg-white "
                />
              </span>
            </div>
            <div className="flex justify-center items-center  w-full lg:hidden">
              INDIA
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
