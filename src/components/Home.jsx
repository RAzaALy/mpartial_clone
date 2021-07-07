import React from "react";
import { Link } from "react-scroll";
import "./Home.css";
const Home = () => {
  return (
    <div className="home" id="home">
      {/* background video */}
      <video
        src="./video/homepage.mp4"
        loop
        autoPlay
        muted
        playsInline
        className="background_video"
      >
      </video>
      {/* slider btn */}
      <div className="slider">
        <Link
          activeClass="active"
          className="nav-link active"
          spy={true}
          offset={-40}
          duration={800}
          smooth={true}
          to="Ground-Truth-Data"
        >
          <div className="slider_btn"></div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
