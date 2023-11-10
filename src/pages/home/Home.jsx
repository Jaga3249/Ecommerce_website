import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import { mycontext } from "../../context/data/MyContext";

const Home = () => {
  const context = useContext(mycontext);
  console.log(context);
  return <Layout>Home</Layout>;
};

export default Home;
