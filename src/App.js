import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import InfoSection from "./components/InfoSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Work from "./components/Work";
import Structure from "./components/Structure";
import Example from "./components/Example";
import "./App.css";
const App = () => {
  return (
    <div className="app">
      <Header />
      <Home />
      <InfoSection />
      <Work />
      <Structure />
      <Example />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
