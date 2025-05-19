import { useEffect, useState } from "react";
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/categories/category";
import About from './components/about us/about';
import Contact from './components/contact/contact'; // Import Contact component
import Footer from './components/footer/footer'
const App = () => {
  let heroData = [
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

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return (
    <div>
      <Background heroCount={heroCount} />
      <Navbar />
      <Hero
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
      />
      <Category />
      <About />
      <Contact /> {/* Add Contact component here */}
      <Footer/>
    </div>
  );
};

export default App;