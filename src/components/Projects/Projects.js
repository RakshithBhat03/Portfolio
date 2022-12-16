import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import clutchvods from "../../Assets/Projects/clutchvods.png";
import clutchui from "../../Assets/Projects/clutchui.png";
import clutchviews from "../../Assets/Projects/clutchviews.png";
import clutchstore from "../../Assets/Projects/clutchstore.png";
import buzzerbeater from "../../Assets/Projects/buzzerbeater.png";

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
              imgPath={clutchvods}
              isBlog={false}
              title="Clutch VODS - Video streaming app"
              description="An interactive video streaming platform centered around NBA built
with React, Redux & Tailwind CSS. You can Watch Videos, Like, add to Watch later & Playlist
Management."
              ghLink="https://github.com/RakshithBhat03/Clutch-VODS"
              demoLink="https://clutch-vods.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clutchstore}
              isBlog={false}
              title="Clutch Store - Ecommerce app"
              description="An online store for purchasing basketball products built with React, Redux & Clutch UI. Some features include Products Showcase, Filters, Cart & Wishlist, Payment
with Razorpay."
              ghLink="https://github.com/RakshithBhat03/ClutchStore_React"
              demoLink="https://clutchstore-react.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={buzzerbeater}
              isBlog={false}
              title="Buzzer Beater - Pomodoro timer app"
              description="A task management app focused around the pomodoro technique.
Built with React, Clutch UI & Firebase for authentication."
              ghLink="https://github.com/RakshithBhat03/Buzzer-Beater"
              demoLink="https://buzzer-beater-react.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clutchviews}
              isBlog={false}
              title="Clutch Views - Chrome extension"
              description="A new tab chrome extension built around user's focus. Built with
React, Clutch UI & Firebase for authentication."
              ghLink="https://github.com/RakshithBhat03/Clutch-Views"
              demoLink="https://clutchviews.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clutchui}
              isBlog={false}
              title="Clutch UI - CSS component library"
              description="A unique CSS component library that was created with HTML,
CSS, and JS allows users to seamlessly incorporate modular
components into their web applications."
              ghLink="https://github.com/RakshithBhat03/ClutchUI"
              demoLink="https://clutchui.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
