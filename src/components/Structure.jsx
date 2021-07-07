import React,{useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Tooltip from "@material-ui/core/Tooltip";
import InfoIcon from "@material-ui/icons/InfoOutlined";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import "./Structure.css";

const Structure = () => {
const [volume, setVolume] = useState();
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "80vw",
      marginTop: "12rem",
    
    },
    margin: {
      height: theme.spacing(3),
    },
  }));
  const marks = [
    {
      value: 0,
      label: '$0',
    },
    {
      value: 25,
      label: '$250,000',
    },
    {
      value: 50,
      label: '$500,000',
    },
    {
      value: 75,
      label: '$750,000',
    },
    {
      value: 100,
      label: '$1M+',
    },
  ];
  
  function valuetext(value) {
    setVolume(value);
    return `${value}°C`;
  }
  const classes = useStyles();
  return (
    <div className="structure" id="Fee-Structure">
      <div className="heading">
        <h1>Waterfall Fee Structure</h1>
      </div>
   {/* range slider */}
   <div className={classes.root}>
      <Slider
        defaultValue={25}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
      />
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
              <h1>{volume}.22%</h1>
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
              <h1>{volume}.72%</h1>
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
