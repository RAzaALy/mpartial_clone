import React from "react";
import Slider from "react-rangeslider";
import Tooltip from "@material-ui/core/Tooltip";
import "react-rangeslider/lib/index.css";
import InfoIcon from "@material-ui/icons/InfoOutlined";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import "./Structure.css";

const Structure = () => {
  var Slider = require("react-rangeslider");
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
              <Tooltip
                title={
                  <p style={{ fontSize: 14, lineHeight: "22px" }}>
                    Fee Structure Example: An estimate grand total of $100k will
                    result in a fee of 7.36% ($7,360). The $750 deposit will be
                    collected upon submission and applied toward the overarching
                    fee.
                  </p>
                }
                arrow
              >
                <InfoIcon className="icon" />
              </Tooltip>
            </div>
            <div className="card-body">
              <h1>70.5%</h1>
              <div className="properties">
                <p>
             
                  <CheckCircleOutlineIcon className="check" /> Access to
                  mpartial engine
                </p>
                <p>
           
                  <CheckCircleOutlineIcon className="check" /> Minimum $750
                  initial deposit
                </p>
              </div>
              <h2>Free</h2>
            </div>
          </div>
          <div className="card">
            <div className="card-header card-header2">
              <h1>Enterprise Plan</h1>
              <Tooltip
                title={
                  <p style={{ fontSize: 14, lineHeight: "22px" }}>
                    Fee Structure Example: An estimate grand total of $100k will
                    result in a 4.86% fee ($4,860). The $750 deposit will be
                    collected upon submission and applied toward the overarching
                    fee.
                  </p>
                }
                arrow
              >
                <InfoIcon className="icon" />
              </Tooltip>
            </div>
            <div className="card-body card-body2">
              <h1>3.66%</h1>
              <div className="properties">
                <p>
                  <CheckCircleOutlineIcon className="check" /> Access to
                  mpartial engine
                </p>
                <p>
                  <CheckCircleOutlineIcon className="check" /> Discounted fee
                  schedule
                </p>
                <p>
                  <CheckCircleOutlineIcon className="check" /> Unlimited
                  collaborators
                </p>
                <p>
                  <CheckCircleOutlineIcon className="check" /> Dedicated account
                  manager
                </p>
                <p>
                  <CheckCircleOutlineIcon className="check" /> Prioritized
                  turnaround time
                </p>
                <p>
                  <CheckCircleOutlineIcon className="check" /> Minimum $750
                  initial deposit
                </p>
              </div>
              <h2>$495/month</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Structure;
