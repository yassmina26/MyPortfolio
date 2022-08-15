import React from "react";
import "../Page/portfolio.css";
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
          <div className="connect-btn">
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

      <div className="hero-section" id="About">
        <div className="image-area text-area about">
          <p className="Heading">About.</p>
          <img src={aboutImg} alt="" />
        </div>
        <div className="text-area2">
          <p className="p1">
            My name is <span> Yassmine Boukari.</span> Currently a student at
            the National School Of Applied Sciences in Marrakech. I’m looking to
            start a new career and develop my skills in the{" "}
            <span> Cloud Computing </span> industry.
          </p>
          <p className="p2">
            With the combination of a positive mindset and the right skill-set,
            I would feel very thrilled to contribute to building innovative and
            adapted solutions.
          </p>
        </div>
      </div>
      <div className="hero-section" id="Projects">
        <div className="image-area text-area about">
          <p className="Heading">Projects.</p>
          <div className="description-part1">
            <div className="heading">
              <p className="Ai">Artificial Intelligence.</p>
              <p className="des">
                Built a “Teachable Machine” for image classification.{" "}
              </p>
              <div className="connect-btn detail-btn">
              <a href="https://github.com/yassmina26/Teachable-machine" target="_blank" rel="noreferrer">
          <button>Show details</button>
        </a>
              
              </div>
            </div>
          </div>

          <div className="description-part1">
            <div className="heading">
              <p className="Ai">Automation. </p>
              <p className="des">
                Automated setup of 3 tier application locally.{" "}
              </p>
              <div className="connect-btn detail-btn">
              <a href="https://google.com" target="_blank" rel="noreferrer">
          <button>Show details</button>
        </a>
              </div>
            </div>
          </div>

          <div className="description-part1">
            <div className="heading">
              <p className="Ai">Cloud Implementation. </p>
              <p className="des">Lift & shift web application on AWS cloud.</p>
              <div className="connect-btn detail-btn">
              <a href="https://google.com" target="_blank" rel="noreferrer">
          <button>Show details</button>
        </a>
              </div>
            </div>
          </div>
        </div>

        <div className="img-area1">
          <img src={projectImg} alt="" />
        </div>
      </div>

      <center>
        <div className="connect-btn detail-btn moreproject-btn">
        <a href="https://github.com/yassmina26" target="_blank" rel="noreferrer">
          <button>More projects</button>
        </a>
        </div>
      </center>

      <div className="Heading cert" id="Certifications">Certifications</div>
     
      <div className="hero-section hero-section-cer ">
        <div className="hero-section certification">
          <div className="material">
            <div className="box">
              <span className="img">
                <img src={certficationImg1} alt="" />
              </span>
            </div>
          </div>

          <div className="Text">
            <span className="text">
              Building Cloud-Native and Multicloud Applications.
            </span>
            <div className="connect-btn show-cre">
            <a href="https://www.credly.com/earner/earned/badge/e89ca46c-6db7-44ae-a9c3-397733feb336" target="_blank" rel="noreferrer">
          <button>Show credentials</button>
        </a>
            </div>
          </div>
        </div>

        <div className="hero-section certification">
          <div className="material">
            <div className="box">
              <span className="img">
                <img src={certficationImg2} alt="" />
              </span>
            </div>
          </div>

          <div className="Text">
            <span className="text">
            Docker Essentials: A Developer Introduction.
            </span>
            <div className="connect-btn show-cre">
            <a href="https://www.credly.com/earner/earned/badge/6ce9696f-efd8-4a9a-8bc7-d87242718f56" target="_blank" rel="noreferrer">
          <button>Show credentials</button>
        </a>
            </div>
          </div>
        </div>
      </div>
   
      <center>
        <div className="connect-btn detail-btn moreproject-btn">
        <a href="" target="_blank" rel="noreferrer">
          <button>Show more</button>
        </a>
        
        </div>
      </center>
     
      <div className="Heading cert">Skills</div>

            <div className="hero-section hero-section-skill-icon " id="Contact" >
            <div className="skill-icon">    <img src={skillicon1} alt="" /></div>
            <div className="skill-icon">    <img src={skillicon2} alt=""  /></div>
            <div className="skill-icon">    <img src={skillicon3} alt="" /></div>
            <div className="skill-icon">    <img src={skillicon4} alt="" /></div>
            <div className="skill-icon">    <img src={skillicon5} alt="" /></div>
            <div className="skill-icon">    <img src={skillicon6} alt="" /></div>
            <div className="skill-icon">    <img src={skillicon7} alt=""  /></div>
            <div className="skill-icon">    <img src={skillicon8} alt="" /></div>

            </div>
    
     <div className="bottom-text">
        <center>
            <p className="Heading click-away"> I am just a click away. </p>
        </center>
       <center> <div className="welcome">I would welcome any valuable opportunity.</div> </center>
     <center>
        <div className="connect-btn b-btn">
          <button> Contact me!</button>
        </div>
      </center>
     </div>
    </div>

  );
};

        