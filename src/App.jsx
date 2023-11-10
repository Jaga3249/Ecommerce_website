import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import DashBoard from "./pages/admin/dashboard/DashBoard";
import NoPage from "./pages/nopage/NoPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order" element={<Order />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/*" element={<NoPage />} />
    </Routes>
  );
};

export default App;
