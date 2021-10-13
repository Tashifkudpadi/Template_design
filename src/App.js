import React from "react";
import About from "./components/about/About";
import Appdesign from "./components/appDesign/Appdesign";
import Contact from "./components/contact/Contact";
import Download from "./components/download/Download";
import Features from "./components/features/Features";
import Footer from "./components/Footer/Footer";
import Home from "./components/home/Home";
import Info from "./components/info/Info";
import Navbar from "./components/navbar/Navbar";
import Satisfaction from "./components/satisfaction/Satisfaction";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Info />
      <Satisfaction />
      <Features />
      <Appdesign />
      <About />
      <Download />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
