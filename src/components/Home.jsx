import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <video
        src="./video/homepage.mp4"
        width="1024"
        height="571"
        loop
        autoPlay
        muted
        playsInline
        className="background_video"
      ></video>
      <div className="slider">
        <div className="slider_btn"></div>
      </div>
    </div>
  );
};

export default Home;
