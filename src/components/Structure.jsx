import React from "react";
import "./Structure.css";

const Structure = () => {
  return (
    <div className="structure">
      <div className="heading">
        <h1>Waterfall Fee Structure</h1>
      </div>
      <div className="content">
        <div className="contentBx">
          <p>
            Drag the slider around based on what you think it will cost to
            repair the property. Move forward based on the estimated fee
            structure below.
          </p>
        </div>

        <div className="cardBx">
          <div className="card">
            <div className="card-header">
              <h1>Trial Plan</h1>
              <p>i</p>
            </div>
            <div className="card-body">
              <h1>70.5%</h1>
              <p> ✔️ Access to mpartial engine</p>
              <p> ✔️ Minimum $750 initial deposit</p>
              <h1>Free</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Structure;
