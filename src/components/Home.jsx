import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="home"  >
      {/* background video */}
      <video
        src="./video/homepage.mp4"
        loop
        autoPlay
        muted
        playsInline
        className="background_video"
      ></video>
      {/* slider btn */}
      <div className="slider">
        <div className="slider_btn"></div>
      </div>
    </div>
  );
};

export default Home;
