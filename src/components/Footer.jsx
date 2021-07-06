import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import CopyrightIcon from "@material-ui/icons/Copyright";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright">
        <p>
          mpartial, a 4D Schematics Company. Copyright <CopyrightIcon /> 2021
          all rights <br /> reserved.
        </p>
      </div>
      <div className="socail">
        <FacebookIcon className="icon" />
        <InstagramIcon className="icon" />
        <TwitterIcon className="icon" />
      </div>
    </div>
  );
};

export default Footer;
