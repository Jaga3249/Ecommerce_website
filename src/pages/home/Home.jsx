import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import { mycontext } from "../../context/data/MyContext";
import HeroSection from "../../components/hero-section/HeroSection";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productcard/ProductCard";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
    </Layout>
  );
};

export default Home;
