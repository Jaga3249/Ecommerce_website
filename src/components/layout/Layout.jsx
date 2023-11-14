import React from "react";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="overflow-hidden">
      <NavBar />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
