import { useEffect, useState } from "react"
import Background from "./components/Background/Background"
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/categories/category";
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


  //create a herocoun t to select teh text
  const [heroCount , setHeroCount] = useState(0);

  useEffect(() => {
  const intervalId = setInterval(() => {
    setHeroCount((count) => (count === 2 ? 0 : count + 1));
  }, 3000);

}, []);

  return (
    <div>
      <Background  heroCount = {heroCount}/>
      <Navbar/>
      <Hero
      heroData = {heroData[heroCount]}
      heroCount = {heroCount}
      setHeroCount = {setHeroCount}
      />
      <Category/>
    </div>
  )
}

export default App


