import React, { useContext } from "react";
import "./Works.css";
import JavaScript from "../../img/js.png";
import java from "../../img/java.png";
import salesforce from "../../img/Salesforce_logo.png";
import react from "../../img/react.png";
import python from "../../img/py.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            My Awesome Working
          </span>
          <span>Skills</span>
          <spane>
          "I specialize in delivering high-quality work for clients and brands through 
            <br />
            strategic planning, creative execution, and effective communication.
            <br />
            Let's collaborate and achieve your goals together."
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={JavaScript} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={java} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={salesforce} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={react} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={python} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
