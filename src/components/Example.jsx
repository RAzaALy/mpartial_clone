import React from "react";
import Swiper from "./Swiper";
import "./Example.css";
const Example = () => {
  return (
    <div className="work">
      <div className="heading">
        <h1>Example Deliverables</h1>
      </div>
      <h1
        style={{
          textAlign: "center",
          marginTop: "12rem",
          marginBottom: "4rem",
          fontSize: "2.5rem",
          fontWeight: "bolder",
        }}
      >
        Pre-Mitigation Scan + Post-Mitigation Scan = ESX & SKX (TruePlan)
      </h1>
      <div className="container">
        <div className="box">
          <canvas
            className="webgl-canvas"
            tabIndex="-1"
            width="930"
            height="480"
          ></canvas>
        </div>
        <div className="box">
          <canvas
            className="webgl-canvas"
            tabIndex="-1"
            width="930"
            height="480"
          ></canvas>
        </div>
      </div>

      <h1
        style={{
          textAlign: "center",
          marginTop: "12rem",
          marginBottom: "4rem",
          fontSize: "2.5rem",
          fontWeight: "bolder",
        }}
      >
        Immaculate. Impartial. [ESX]
      </h1>
      <Swiper />
      <h1
        style={{
          textAlign: "center",
          marginTop: "12rem",
          marginBottom: "4rem",
          fontSize: "2.5rem",
          fontWeight: "bolder",
        }}
      >
        MATTERPORT TRUEPLAN™ FOR XACTIMATE™
      </h1>
      <div className="imgContainer">
          <img  className="img" src="./images/img1.png" alt="img1" style={{width: "100%",marginBottom: '2rem',borderRadius: '2rem'}} />
          <img  className="img" src="./images/img2.png" alt="img2"  style={{width: "100%",marginBottom: '2rem',borderRadius: '2rem'}}/>
      </div>
    </div>
  );
};

export default Example;
