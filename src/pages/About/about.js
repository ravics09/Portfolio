import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
// import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

import SkillSet from "./skillSet";
import MyGithub from "./myGithub";

import laptopImg from "../../assets/about.png";
import Particle from "../../components/particle";

const About = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p style={{ textAlign: "justify" }}>
                    Hi Everyone, I am{" "}
                    <span className="purple">Ravi Sharma </span>
                    from <span className="purple"> Dewas, (Madhya Pradesh).</span>
                    <br />
                    I am currently employed as a Senior Software Developer at Globant India Pvt. Ltd..
                    <br />
                    I have completed M.Tech in the stream of Information Security and Network Management
                    from School of computer science and information technology D.A.V.V. Indore, Madhya Pradesh.
                    <br />
                    <br />
                    Apart from coding, some other activities that I love to do!
                  </p>
                  <ul>
                    <li className="about-activity">
                      <ImPointRight /> Watching Movies
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> Writing Tech Blogs
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> Travelling
                    </li>
                  </ul>

                  <p style={{ color: "rgb(155 126 172)" }}>
                  "Work to create solutions that have a real impact!"{" "}
                  </p>
                  <footer className="blockquote-footer">Ravi</footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <SkillSet />
        <MyGithub />
      </Container>
    </Container>
  );
};

export default About;
