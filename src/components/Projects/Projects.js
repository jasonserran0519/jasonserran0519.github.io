import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sludge from "../../Assets/Projects/sludge.png";
import swap from "../../Assets/Projects/swapItLikeItsHot.png";
import maya10 from "../../Assets/Projects/MAYA/maya10.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={swap}
              isBlog={false}
              title="Swap It Like Its Hot"
              description="A marketplace for SCU students to buy sell or rent books. It uses firbase as its main storage, and is run tied together using React, and Flask.
              It is made by SCU for SCU"
              ghLink="https://github.com/jasonserran0519/Swap-It-Like-It-s-Hot"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={maya10}
              isBlog={false}
              title="Mayan Roots Project"
              description="A mobile application that preserves Yucatan's agricultural heritage and supports local farmers. My Senior Design Project, and last project at Santa Clara University. This was all made possible through the use of fluttter, firebase for storage and various API's to track local weather patterns, location, language support, etc."
              ghLink="https://github.com/jasonserran0519/Mayan-Roots"
              demoLink="https://jasonserrano.github.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sludge}
              isBlog={false}
              title="Editor.io"
              description="Webapp used for testing at Santa Clara University's Imaginarium Lab to support multi-user research studies. The goal was to find if there was a correlation between the amount of visual stimulation active in the same time, and information retention. This was all possible with Tools such as React and Netflify"
              ghLink="https://github.com/jasonserran0519/sludge-v2"          
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
