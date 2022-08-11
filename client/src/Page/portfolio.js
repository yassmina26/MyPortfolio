import React from "react";
//import "./Portfolio.css";
import Linkdin from "../asserts/linkedin.png";
import github from "../asserts/github.png";
import drawkit from "../asserts/DrawKit.png";
import aboutImg from "../asserts/about.png";
import projectImg from "../asserts/project.png";
import certficationImg1 from "../asserts/cert1.png";
import certficationImg2 from "../asserts/cert2.png";
import skillicon1 from '../asserts/skill-icon1.png'
import skillicon2 from '../asserts/skill-icon2.png'
import skillicon3 from '../asserts/skill-icon3.png'
import skillicon4 from '../asserts/skill-icon4.png'
import skillicon5 from '../asserts/skill-icon5.png'
import skillicon6 from '../asserts/skill-icon6.png'
import skillicon7 from '../asserts/skill-icon7.png'
import skillicon8 from '../asserts/skill-icon8.png'


export const Portfolio = () => {
    return (
      <div className="porfolio">
        <div className="hero-section main">
          <div className="text-area">
            <h1 className="Heading">Hi, I’m Yassmine Boukari.</h1>
            <p className="description">
              A fifth-year engineering student who trying to specialize in Cloud
              Computing.
            </p>
            <div className="contact-btn">
              <button> Contact me! </button>
            </div>
            <div className="icons">
             <a href="https://www.linkedin.com/in/yassmineboukari/">
              <span className="linkdin-icon">
                <img src={Linkdin} alt="" />
              </span>
              </a>
  
              <a href="https://github.com/yassmina26">
              <span className="github">
                <img src={github} alt="" />
              </span>
              </a>
            </div>
          </div>
          <div className="img-area">
          <img src={drawkit} alt="" />
        </div>
      </div>
      </div>
 )
 }