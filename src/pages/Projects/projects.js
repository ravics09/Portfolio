import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Particles from "./../../components/particle";
import ProjectCard from "./projectCard";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particles />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I&apos;ve worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={editor}
              isBlog={false}
              title="Dev Assist"
              description="Online platform that contains a collection of free resources for product developer and designers. This is a single page web app build using reactjs "
              ghLink="https://github.com/ravics09/devassist"
              demoLink="https://devassist.netlify.app/"
              altText="Dev Assist"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="Auth App"
              description="Node JS Backend app  with features of signin, signup, google signin, reset password, forgot password. Implemented all security features and caching support. Documented the REST API endpoints using open api and containerized on docker."
              ghLink="https://github.com/ravics09/AuthApp"
              demoLink="/"
              altText="Auth App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={bitsOfCode}
              isBlog={false}
              title="JavaScript Centric"
              description="A website for developer community where they can post articles and share the knowledge. It has a list of Features like create, edit, delete post along with like, comment, save post features. Built on MERN stack technologies."
              ghLink="https://github.com/ravics09/javascriptcentric"
              demoLink="/"
              altText="JavaScript Centric"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={leaf}
              isBlog={false}
              title="AliteKart"
              description="Online shopping platform for gaming related accessories and items. It include a list of products with featires like sort by rating, price, types. Also payment methods integration with paytm, paypal, credit card."
              ghLink="https://github.com/ravics09/alitekart"
              demoLink="/"
              altText="Alite Kart"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={leaf}
              isBlog={false}
              title="AliteKart"
              description="Online shopping platform for gaming related accessories and items. It include a list of products with featires like sort by rating, price, types. Also payment methods integration with paytm, paypal, credit card."
              ghLink="https://github.com/ravics09/alitekart"
              demoLink="/"
              altText="Alite Kart"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={leaf}
              isBlog={false}
              title="AliteKart"
              description="Online shopping platform for gaming related accessories and items. It include a list of products with featires like sort by rating, price, types. Also payment methods integration with paytm, paypal, credit card."
              ghLink="https://github.com/ravics09/alitekart"
              demoLink="/"
              altText="Alite Kart"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
