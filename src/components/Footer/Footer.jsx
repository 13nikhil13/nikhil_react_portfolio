import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import logo from "../../img/nikhil_logo1.ico";


const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <div className="f-icons"> 
          <img src={logo} alt="" size={"3rem"}/> 
        </div>
          <p>Copyright © 2023 Nikhil. Made by :) Nikhil Kakkar </p>
      </div>
    </div>
  );
};

export default Footer;
