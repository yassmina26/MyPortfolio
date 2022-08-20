import React from "react";
import "../Page/portfolio.css";
import Linkdin from "../asserts/linkedin.png";
import github from "../asserts/github.png";
import drawkit from "../asserts/DrawKit.png";
import aboutImg from "../asserts/about.png";
import projectImg from "../asserts/project.png";
import certficationImg1 from "../asserts/cert1.png";
import certficationImg2 from "../asserts/cert2.png";
import skillicon1 from "../asserts/skill-icon1.png";
import skillicon2 from "../asserts/skill-icon2.png";
import skillicon3 from "../asserts/skill-icon3.png";
import skillicon4 from "../asserts/skill-icon4.png";
import skillicon5 from "../asserts/skill-icon5.png";
import skillicon6 from "../asserts/skill-icon6.png";
import skillicon7 from "../asserts/skill-icon7.png";
import skillicon8 from "../asserts/skill-icon8.png";
import ContactModal from "../components/Modal";
import Typical from "react-typical";
import Paricle from "../components/particle";
import { HiArrowNarrowRight } from "react-icons/hi";

import { FiLinkedin, FiGithub } from "react-icons/fi";
export const Portfolio = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <div className="porfolio">
        <div className="container">
          <div className="hero-section main">
            <div className="text-area">
              <h1 className="Heading">
                <Typical
                  steps={[" Hi, I’m Yassmine Boukari.", 3000]}
                  loop={Infinity}
                  wrapper="h1"
                />
              </h1>
              <p className="description">
                A fifth-year engineering student who trying to specialize in
                Cloud Computing.
              </p>
              <button className="contact_btn" onClick={() => setIsOpen(true)}>
                {" "}
                Contact me!{" "}
              </button>

              <div className="icons">
                <a
                  href="https://www.linkedin.com/in/yassmineboukari/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiLinkedin size={24} />
                </a>

                <a
                  href="https://github.com/yassmina26"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub style={{ marginLeft: 10 }} size={24} />
                </a>
              </div>
            </div>
            <div className="img-area">
              <img src={drawkit} alt="" />
            </div>
          </div>
        </div>

        <div className="container">
          <p className="Heading">About.</p>
          <div className="hero-section" id="About">
            <div className="image-area  about">
              <img src={aboutImg} alt="" />
            </div>
            <div className="text-area2">
              <p className="p1">
                <span>
                  My name is <strong> Yassmine Boukari.</strong> Currently a
                  student at the National School Of Applied Sciences in
                  Marrakech.
                  <br />
                </span>
                <span>
                  I’m looking to start a new career and develop my skills in the{" "}
                  <strong> Cloud Computing </strong> industry.
                </span>
              </p>
              <p className="p2" style={{ marginTop: 20 }}>
                With the combination of a positive mindset and the right
                skill-set, I would feel very thrilled to contribute to building
                innovative and adapted solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <h1 className="Heading">Projects.</h1>
          <div className="project-container" id="Projects">
            <div className="projets">
              <div className="description-part1">
                <div className="heading">
                  <p className="Ai">Artificial Intelligence.</p>
                  <p className="des">
                    Built a “Teachable Machine” for image classification.{" "}
                  </p>
                  <a
                    className="show_more"
                    href="https://github.com/yassmina26/Teachable-machine"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span style={{ color: "#ffbb45" }}>Show more</span>
                    <HiArrowNarrowRight
                      color="#ffbb45"
                      style={{ marginLeft: 5 }}
                    />
                  </a>
                </div>
              </div>

              <div className="description-part1">
                <div className="heading">
                  <p className="Ai">Automation. </p>
                  <p className="des">
                    Automated setup of 3 tier application locally.{" "}
                  </p>
                  <a
                    className="show_more"
                    href="https://github.com/yassmina26/Teachable-machine"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span style={{ color: "#ffbb45" }}>Show more</span>
                    <HiArrowNarrowRight
                      color="#ffbb45"
                      style={{ marginLeft: 5 }}
                    />
                  </a>
                </div>
              </div>

              <div className="description-part1">
                <div className="heading">
                  <p className="Ai">Cloud Implementation. </p>
                  <p className="des">
                    Lift & shift web application on AWS cloud.
                  </p>
                  <a
                    className="show_more"
                    href="https://github.com/yassmina26/Teachable-machine"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span style={{ color: "#ffbb45" }}>Show more</span>
                    <HiArrowNarrowRight
                      color="#ffbb45"
                      style={{ marginLeft: 5 }}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="right-projects">
              <img src={"projects.png"} alt="" />
            </div>
          </div>
        </div>

        <center>
          <div className="connect-btn detail-btn moreproject-btn">
            <a
              href="https://github.com/yassmina26"
              target="_blank"
              rel="noreferrer"
            >
              <button>More projects</button>
            </a>
          </div>
        </center>

        <div className="container" style={{ marginTop: 60 }}>
          <div className="Heading" id="Certifications">
            Certifications
          </div>

          <div className="hero-section-cer ">
            <div className="certifications">
              <div className=" certification">
                <div className="cert-img">
                  <img src={certficationImg1} alt="" />
                </div>
                <div className="Text">
                  <span className="text">
                    Building Cloud-Native and Multicloud Applications.
                  </span>
                  <a
                    className="show_more"
                    href="https://github.com/yassmina26/Teachable-machine"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span style={{ color: "#ffbb45" }}>Show more</span>
                    <HiArrowNarrowRight
                      color="#ffbb45"
                      style={{ marginLeft: 5 }}
                    />
                  </a>
                </div>
              </div>

              <div className=" certification">
                <div className="cert-img">
                  <img src={certficationImg2} alt="" />
                </div>
                <div className="Text">
                  <span className="text">
                    Docker Essentials: A Developer Introduction.
                  </span>
                  <a
                    className="show_more"
                    href="https://github.com/yassmina26/Teachable-machine"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span style={{ color: "#ffbb45" }}>Show more</span>
                    <HiArrowNarrowRight
                      color="#ffbb45"
                      style={{ marginLeft: 5 }}
                    />
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
        </div>

        <div className="container" style={{ marginTop: 60 }}>
          <div className="Heading">Skills</div>

          <div className="hero-section-skill-icon " id="Contact">
            <div className="skill-icon">
              {" "}
              <img src={skillicon1} alt="" />
            </div>
            <div className="skill-icon">
              {" "}
              <img src={skillicon2} alt="" />
            </div>
            <div className="skill-icon">
              {" "}
              <img src={skillicon3} alt="" />
            </div>
            <div className="skill-icon">
              {" "}
              <img src={skillicon4} alt="" />
            </div>
            <div className="skill-icon">
              {" "}
              <img src={skillicon5} alt="" />
            </div>
            <div className="skill-icon">
              {" "}
              <img src={skillicon6} alt="" />
            </div>
            <div className="skill-icon">
              {" "}
              <img src={skillicon7} alt="" />
            </div>
            <div className="skill-icon">
              {" "}
              <img src={skillicon8} alt="" />
            </div>
          </div>
        </div>

        <div
          className="bottom-text"
          style={{ paddingBottom: 40, marginTop: 60 }}
        >
          <center>
            <p className="Heading" style={{ marginBottom: 40 }}>
              {" "}
              I am just a click away.{" "}
            </p>
          </center>
          <center>
            {" "}
            <div className="welcome">
              I would welcome any valuable opportunity.
            </div>{" "}
          </center>
          <center>
            <div className="connect-btn b-btn">
              <button onClick={() => setIsOpen(!isOpen)}> Contact me!</button>
            </div>
          </center>
        </div>
      </div>
      {isOpen && <ContactModal onClose={() => setIsOpen(false)} />}
    </>
  );
};
