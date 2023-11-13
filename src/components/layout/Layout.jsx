import React from "react";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className="overflow-x-hidden">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
