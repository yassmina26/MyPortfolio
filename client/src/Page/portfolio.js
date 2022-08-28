import React, { useEffect, useState } from "react";
import "../Page/portfolio.css";
import drawkit from "../asserts/DrawKit.png";
import aboutImg from "../asserts/about.png";
import certficationImg1 from "../asserts/cert1.png";
import certficationImg2 from "../asserts/cert2.png";
import ContactModal from "../components/Modal";

import Typical from "react-typical";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FiLinkedin, FiGithub} from "react-icons/fi";
import { FaAws, FaDocker} from "react-icons/fa";
import { SiApachetomcat, SiVagrant, SiAnsible, SiMysql, SiVirtualbox} from "react-icons/si";
import { DiJenkins} from "react-icons/di";
import getAbout from "../Service/About";
import getProjects from "../Service/Projects";
import getCert from "../Service/Certifs";

export const Portfolio = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [aboutData, setAboutData] = useState([]);
  const [certData, setCertData] = useState([]);
  const [ProjectsData, setProjectsData] = useState([]);
  useEffect(() => {
    const fetchData = async () => { const about = await getAbout();
      const project = await getProjects();
      const cert = await getCert();
    setAboutData(about) 
    setProjectsData(project)
    setCertData(cert)
  }
    fetchData()
  }, [] )
console.log(certData,ProjectsData,aboutData)
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
              {/* <button className="contact_btn" onClick={() => setIsOpen(true)}>
                {" "}
                Contact me!{" "}
              </button> */}

              <div className="icons">
                <a
                  href="https://www.linkedin.com/in/yassmineboukari/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiLinkedin size={24} />
                </a>

                <a
                  href="https://github.com/yassmina26?tab=repositories"
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
            <span>
                  My name is <strong> Yassmine Boukari.</strong> Currently a
                  student at the National School Of Applied Sciences in
                  Marrakech. 
                  <br />
                </span> 
              {
                aboutData.length && <p className="p1" style={{marginTop: 19}}>
                {aboutData[0].text}
              </p>
              }
            </div>
          </div>
        </div>
        <div className="container">
          <h1 className="Heading">Projects.</h1>
          <div className="project-container" id="Projects">
            <div className="projets">
              {
                ProjectsData.length && ProjectsData.map(project => (
                  <div className="description-part1">
                <div className="heading">
                  <p className="Ai">{project.title}</p>
                  <p className="des">
                    {project.description}
                  </p>
                  <a
                    className="show_more"
                    href={project.gitLink}
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
                 ))
              }
            </div>

            <div className="right-projects">
              <img src={"projects.png"} alt="" />
            </div>
          </div>
        </div>

        <center>
          <div className="connect-btn detail-btn moreproject-btn">
            <a
              href="https://github.com/yassmina26?tab=repositories"
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
              {
                certData.length && certData.map(cert => (
                  <div className=" certification">
                  <div className="cert-img">
                    <img src={cert.image} alt="" />
                  </div>
                  <div className="Text">
                    <span className="text">
                      {cert.title}
                    </span>
                    <a
                      className="show_more"
                      href={cert.certLink}
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
                ))
              }
            
            </div>
          </div>

          <center>
            <div className="connect-btn detail-btn moreproject-btn">
              <a href="https://www.linkedin.com/in/yassmineboukari/details/certifications/"
                 target="_blank"
                 rel="noreferrer">
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
              <FaAws size={70}  alt="" />
            </div>
            <div className="skill-icon">
              {" "}
              <SiApachetomcat size={70}  alt="" />
            </div>
            <div className="skill-icon">
              {" "}
              <SiVagrant size={70}  alt="" />
            </div>
            <div className="skill-icon">
              {" "}
              <DiJenkins size={70} alt="" />
            </div>
            <div className="skill-icon">
              {" "}
              <SiAnsible size={70} alt="" />
            </div>
            <div className="skill-icon">
              {" "}
              <SiMysql size={70} alt="" />
            </div>
            <div className="skill-icon">
              {" "}
              <SiVirtualbox size={70} alt="" />
            </div>
            <div className="skill-icon">
              {" "}
              <FaDocker size={70} alt="" />
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
