// import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";
import Badge from "react-bootstrap/Badge";
import Img from "react-cool-img";

const myProjects = [
  {
    image: "/images/1.png",
    title: "Skills and deliverables",
    description:
      "We conducted a market analysis, made a research for a suitable website style and presented it to the client.  ",
    demoLink: "https://inverticare.com/en/",
    badge: "ReactJS",
  },
  {
    image: "/images/2.png",
    title: "Post age",
    description:
      "Pixel-perfect responsive development with smooth animations and with Strapi integration.",
    demoLink: "https://dev.postagehealth.com/",
    badge: "NextJS",
  },
  {
    image: "/images/3.png",
    title: "Premium Quality Real Estate Photos",
    description:
      "This is a React Web Site with updated Primer project based on client's suggestions.",
    demoLink: "https://second-listening-835783.framer.app/",
    badge: "Framer",
  },
  {
    image: "/images/4.png",
    title: "Jawla",
    description:
      "This is a website created by converting Figma to HTML/css/bootstrap/javascript.",
      demoLink: "https://jawla.netlify.app/",
    badge: "Figma",
  },
  {
    image: "/images/5.png",
    title: "Online Doctor appointment",
    description:
      " I have designed & developed this online doctor appointment as well as video consultancy in this platform.",
    demoLink: "https://www.yoopha.com/",
    badge: "App ",
  },
  {
    image: "/images/6.png",
    title: "The Beverageangels",
    description:
      "This is a web shopping website that allows you to log in with a number, name, and profile image using React.",
    demoLink: "https://thebeverageangels.com.au/collections",
    badge: "Shopping",
  },
];

const Projects = () => {
  const [element, controls] = useScroll();
  return (
    <div className="projects" id="projects">
      <motion.div
        variants={window.innerWidth > 767 ? scrollReveal : null}
        ref={element}
        animate={controls}
        className="container pt-6 pb-6"
      >
        <div className="heading-section">
          <h1>
            <span className="chonburi-font green-text">Pro</span>jects
          </h1>
        </div>
        <div className="projects-cards">
          <Row className="justify-content-center">
            {myProjects.map((project, index) => {
              return (
                <Col md={4} className="mb-5" key={index + 1}>
                  <Badge className="lmckdncd" pill variant="warning">
                    {project.badge}
                  </Badge>
                  <div className="project-card">
                    <div className="img-section">
                      <Img
                        placeholder="https://p4.wallpaperbetter.com/wallpaper/990/450/548/loading-wallpaper-preview.jpg"
                        src={project.image}
                        error="/images/download.png"
                        alt="React Cool Img"
                      />
                      <div className="imageCardEffect"></div>
                    </div>
                    <div className="project-info">
                      <h5 className="color-white font-weight-bold">
                        {project.title}
                      </h5>
                      <p className="color-white">{project.description}</p>
                      <div className="d-flex justify-content-between mr-4">
                      <a rel="noopener noreferrer"
                          href={project.demoLink}
                          className="project-card-btn"
                          target="_blank"
                        >
                          Live Demo
                        </a>
                      </div>
                    </div>
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

export default Projects;
