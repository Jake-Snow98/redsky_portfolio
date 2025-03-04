// import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";
import Img from 'react-cool-img';

const myProjects = [
  {
    title: "Bachelor’s Degree in Computer Science",
    dLink: "Awarded Bachelor of Computer Science in May 2020: My contribution was successfully adding a new module to the Spanish website within the given time frame and simultaneously working on other bugs and tasks."
  },
  {
    title: "EMPLOYEE SPOT AWARD NOVEMBER 2021",
    dLink: "Awarded for my contribution and dedication to the work, taking on more work and responsibility, adding value to my views on the features being discussed, communicating with other teams to discuss dependencies and reaching completion."
  }
];

const SocialProfiles = () => {
  const [element, controls] = useScroll();
  return (
    <div className="projects1" id="projects">
      <motion.div
        variants={window.innerWidth > 767 ? scrollReveal : null}
        ref={element}
        animate={controls}
        className="container pt-6 pb-6"
      >
        <div className="heading-section">
        </div>
        <div className="projects-cards">
          <Row className="justify-content-center">
            {myProjects.map((project,index) => {
              return (
                <Col md={4} className="mb-5" key={index+1}>
                  <div className="project-card1">
                    <div className="img-section">
                      <div className="imageCardEffect"></div>
                    </div>
                      <h5 className="color-white font-weight-bold">
                        {project.title}
                      </h5>
                      <p className="color-white">{project.dLink}</p>
                     {project.demoLink && <div className="d-flex justify-content-between mr-4">
                      </div>}
                    </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </motion.div>
    </div>
  );
};

export default SocialProfiles;
