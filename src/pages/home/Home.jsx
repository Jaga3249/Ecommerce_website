import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import { mycontext } from "../../context/data/MyContext";
import HeroSection from "../../components/hero-section/HeroSection";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productcard/ProductCard";
import Track from "../../components/track/Track";
import TestMonial from "../../components/testmonials/TestMonial";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
      <Track />
      <TestMonial />
    </Layout>
  );
};

export default Home;
