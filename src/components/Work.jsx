import React from "react";
import "./Work.css";

const Work = () => {
  return (
    <div className="work" id="How-It-Works">
      <div className="heading">
        <h1>How It Works</h1>
      </div>
      <div className="content">
        <div className="box">
          <div className="number">
            <h1>1</h1>
          </div>
          <div className="contentBx">
            <p>
              Perform pre-mitigation and post-mitigation scans with a Matterport
              Pro Series camera.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="number">
            <h1>2</h1>
          </div>
          <div className="contentBx">
            <p>
              Submit the Matterport scans via the mpartial portal and then go
              back to what you do great.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="number">
            <h1>3</h1>
          </div>
          <div className="contentBx">
            <p>
              Receive a well-formatted, fully documented Xactimate PDF, ESX &
              Matterport TruePlan SKX.
            </p>
          </div>
        </div>
      </div>
      <button className="btn">
          Get Started
      </button>
    </div>
  );
};

export default Work;
