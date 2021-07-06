import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import InfoSection from "./components/InfoSection";
import "./App.css";
const App = () => {
  return (
    <div className="app">
      <Header />
      <Home />
      <InfoSection />
    </div>
  );
};

export default App;
