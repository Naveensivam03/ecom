import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/categories/category";
import About from './components/about us/about';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import ProductList from "./components/product_listing/product_list";
import ProductDescription from "./components/description/descrip";
import Cart from './components/cart/cart';

const Home = ({ heroData, heroCount, setHeroCount }) => {
  return (
    <>
      <Background heroCount={heroCount} />
      <Navbar />
      <Hero
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
      />
      <Category />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

const App = () => {
  const heroData = [
    {
      text1: "Style. Comfort. Confidence.",
      text2: "Everyday essentials, elevated.",
    },
    {
      text1: "Urban Wear, Redefined.",
      text2: "Clean lines. Bold energy.",
    },
    {
      text1: "Sustainable. Statement-Making.",
      text2: "Look good. Feel better.",
    },
  ];

  const [heroCount, setHeroCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home heroData={heroData} heroCount={heroCount} setHeroCount={setHeroCount} />} />
        <Route path="/collections" element={<ProductList />} />
        <Route path="/collections/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDescription />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
