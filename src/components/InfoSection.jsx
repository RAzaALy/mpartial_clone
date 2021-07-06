import React from "react";
import ReactCompareImage from "react-compare-image";
import "./InfoSection.css";
const InfoSection = () => {
  return (
    <>
      <div className="section">
        <div className="left_title">
          <h1 className="title">GROUND-TRUTH DATA EVERYONE TRUSTS</h1>
        </div>
        <div className="right_content">
          <p className="description">
            We have combined the best-of-breed technology platforms with an eye
            towards relieving you of administrative burden. Matterport 3D scans
            augmented by TruePlan are used to generate consistent Xactimate
            sheets that are delivered in accord with Actionable Insights
            compliance rule sets. Each mpartial is produced with full
            transparency, unprecedented forensic photography, and infallible
            geospatial data that collectively result in rapid approvals.
          </p>
        </div>
      </div>
      <div className="compare_panel">
        <div className="container">
          <ReactCompareImage
            leftImage="./images/left-image.jpeg"
            rightImage="./images/right-image.jpeg"
            sliderLineColor="#3AC280"
          />
          ;
        </div>
        <div className="try_btn">
          <button className="btn">Try Today</button>
        </div>
      </div>
    </>
  );
};

export default InfoSection;
