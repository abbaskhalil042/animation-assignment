import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AnimatedImageBar from "./components/AnimatedImageBar";
import DiscoverSec from "./components/DiscoverSec";
import YoursSec from "./components/YoursSec";
import AfterParallax from "./components/AfterParallax";
import Experience from "./components/Experience";
import Safe from "./components/Safe";
import Fast from "./components/Fast";
import Built from "./components/Built";
import TakeYourBrowser from "./components/TakeYourBrowser";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />

      <AnimatedImageBar />
      <DiscoverSec />
      <YoursSec />
      <AfterParallax />
      <Experience />
      <Safe />
      <Fast />
      <Built />
      <Faq />
      <TakeYourBrowser />
      <Footer/>
    </div>
  );
};

export default App;
