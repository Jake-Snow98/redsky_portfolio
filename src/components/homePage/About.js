import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import WorkIcon from "@material-ui/icons/Work";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import SkillSvg from "../../images/about-shape.svg";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";

const About = () => {
  const [tab, setTab] = useState("experience");
  const [element, controls] = useScroll();

  const methodDoesNotExist = (aman) => {
    throw new Error("this is a sentry error");
  };

  return (
    <motion.div id="about" className="about pb-6 pt-6">
      <img className="skills-img" src={SkillSvg} alt="" />

      <motion.div
        variants={window.innerWidth > 767 ? scrollReveal : null}
        ref={element}
        animate={controls}
        className="container"
      >
        <Row className="">
          <Col className="p-0 text-center" md={5}>
          <img
              src="/images/222.jpg"
              alt="React Cool Img"
              height="50%"
            />
          </Col>
          <Col className="" md={7}>
            <div className="about-info">
              <h1 className="pb-4">
                <span className="chonburi-font green-text ">Abo</span>ut Me
              </h1>
              <p className="details">
              With over 8 years of experience in the tech industry, 
              I’m a seasoned Senior Full-Stack Developer who specializes in building dynamic, scalable, and high-performance web and mobile applications. 
              My skill set spans across frontend, backend, mobile app development, DevOps, and e-commerce, with a particular focus on cutting-edge technologies like React.js, Next.js and Node.js.
              </p>
              <div className="d-flex align-items-center resume-section ">
                <h6>Resume :</h6>
              </div>
              <div className="mt-5">
                <Row className="tabs mb-2">
                  <Col
                    className={`
                      ${tab === "experience"
                        ? "active-tab custom-mr-3"
                        : "inactive-tab"
                      } tab`}
                    onClick={() => setTab("experience")}
                  >
                    <WorkIcon />
                    <h5>Work Experiences</h5>
                  </Col>
                  <Col
                    className={`
                      ${tab === "education"
                        ? "active-tab custom-ml-3"
                        : "inactive-tab"
                      } tab`}
                    onClick={() => setTab("education")}
                  >
                    <LocalLibraryIcon />
                    <h5>Educations</h5>
                  </Col>
                </Row>
                <br/>
                <div className="about-sub-data">
                  {tab === "experience" ? (
                    <div className="work-experiences">
                      <h5>Pintar Edutech Private Limited</h5>
                      <ul>
                        <li>
                          Working As a Frontend Developer (Tech - NextJs,ReactJS,Redux)
                        </li> 
                      </ul>
                      <h5>Nextory Private Limited</h5>
                      <ul>
                        <li>
                          Working As a Frontend Developer (Tech - ReactJS,Redux)
                        </li> 
                      </ul>
                    </div>
                  ) : null}
                  {tab === "education" ? (
                    <div className="education">
                      <div>
                        <h5>Stevens Institute of Technology</h5>
                        <ul>
                          <li className="text-justify">
                          Stevens Institute of Technology in Hoboken, New Jersey USA 2020.
                          </li>
                        </ul>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </motion.div>
    </motion.div>
  );
};

export default About;
