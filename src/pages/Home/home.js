import React from "react";
import Tilt from "react-parallax-tilt";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import myImg from "../../assets/avatar.svg";
import homeLogo from "../../assets/home-main.svg";
import Typer from "./typer";
import Particles from "./../../components/particle";

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particles />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                My name is
                <strong className="main-name"> RAVI SHARMA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Typer />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              My passion for programming has deepened over the years, and I am
              confident in the breadth of knowledge I have acquired.
              <br />
              <br />
              Accumulating 7 years of hands-on experience in both Frontend and
              Backend development using
              <i>
                <b className="purple">
                  {" "}
                  ReactJS, NodeJS, ExpressJS, JavaScript{" "}
                </b>
              </i>
              <br />
              <br />
              Extensive knowledge of &nbsp;
              <i>
                <b className="purple">
                  Context API, Redux, Redux-thunk, REST API{" "}
                </b>{" "}
                and also in areas related to{" "}
                <b className="purple">
                  Docker, Containerization, GraphQL, Open API, AWS Services
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for making youtube
              videos for my youtube channel{" "}
              <b className="purple">JavaScript Centric</b> and Writing Technical
              articles on <b className="purple">Medium</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/channel/UC9MmyicGIveu0AId8OFAOmQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillYoutube />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
