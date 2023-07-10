import React from "react";
import {
  About,
  CheckIn,
  Feedback,
  Hero,
  Plan,
  Pricing,
  Services,
} from "../components";
const Home = () => {
    
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Feedback />
      <Pricing />
      <CheckIn />
      <Plan />
    </div>
  );
};

export default Home;
