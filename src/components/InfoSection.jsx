import React from "react";
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
          <img
            alt="pre-Mitigation"
            data-testid="right-image"
            className="right_image"
            src="./images/right-image.jpeg"
          ></img>
          <img
            alt="post-Mitigation"
            data-testid="left-image"
            className="right_image"
            src="./images/left-image.jpeg"
          ></img>
          <div className="line_container">
            <div className="line-up"></div>
            <div className="arrow">
              <img src="./images/arrow.png" alt="handle" loading="lazy" />
            </div>
            <div className="line-down"></div>
          </div>
        </div>
        <div dir="ltr" className="resize_sensor">
          <div class="resize_sensor_expand">
            <div className="box"></div>
          </div>
          <div class="resize_sensor_shrink">
            <div className="box2"></div>
          </div>
        </div>
        <div class="try_btn">
          <button class="btn">Try Today</button>
        </div>
      </div>
    </>
  );
};

export default InfoSection;
