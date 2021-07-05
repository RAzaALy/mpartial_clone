import React from "react";
import "./Home.css";
const Home = () => {
  return (
      <div className="home">
      <video src="./video/homepage.mp4" width="1024" height="543" loop autoPlay muted playsInline className="background_video"></video>
      </div>
  );
};

export default Home;
