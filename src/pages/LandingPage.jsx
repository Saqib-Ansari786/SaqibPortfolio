import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/Home";
import Info from "../components/Info";
import Location from "../components/Location";
import NewsLetter from "../components/NewsLetter";
import Plans from "../components/Plans";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Work from "../components/Work";

export default function LandingPage() {
  return (
    <>
      <Home />
      <Info />
      <About />
      <Services />
      <Plans />
      <Work />
      <Testimonials />
      <NewsLetter />
      <Contact />
      <Location />
    </>
  );
}
