import React from "react";
import Header from "../components/Header";
import Hero from "../components/Home/Hero";
import Categories from "../components/Home/Categories";
import ProductsList from "../components/Home/ProductsList";
import Promo from "../components/Home/Promo";
import Subscribe from "../components/Home/Subscribe";
import Brands from "../components/Home/Brands";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <ProductsList />
      <Promo />
      <ProductsList />
      <Subscribe />
      <Brands />
      <Footer />
    </>
  );
};

export default Home;
