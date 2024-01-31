/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import emailjs from "@emailjs/browser";

// import Particles from "./../../components/particle";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const resetData = (message) => {
    setSuccessMessage(message);
    setFormData({
      user_name: "",
      user_email: "",
      message: "",
    });

    setTimeout(() => {
      setSuccessMessage("");
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        (result) => {
          resetData("Email sent successfully");
        },
        (error) => {
          resetData("Please try after sometime.");
        },
      );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Container fluid className="contact-me-section">
      <h1 className="contact-me-heading">
        Let&apos;s <strong className="purple">Connect </strong>
      </h1>
      <p style={{ color: "white" }}>
        Hit me up if you have any questions or just want to say Hi!
      </p>
      <Container>
        <Row className="contact-me-section-form">
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group
                controlId="formBasicName"
                style={{ marginBottom: "10px" }}
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="user_name"
                  value={formData.user_name}
                  onChange={(e) => handleInputChange(e)}
                />
              </Form.Group>
              <Form.Group
                controlId="formBasicEmail"
                style={{ marginBottom: "10px" }}
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="user_email"
                  required
                  value={formData.user_email}
                  onChange={(e) => handleInputChange(e)}
                />
              </Form.Group>
              <Form.Group
                controlId="formBasicMessage"
                style={{ marginBottom: "10px" }}
              >
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  required
                  value={formData.message}
                  onChange={(e) => handleInputChange(e)}
                />
              </Form.Group>
              {successMessage && (
                <p style={{ color: "green" }}>{successMessage}</p>
              )}
              <Button
                variant="primary"
                type="submit"
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  width: "100%",
                }}
              >
                Let&apos;s talk!
              </Button>
            </Form>
          </Col>
        </Row>
        <Row className="contact-section-footer">
          <Col md={6} className="home-about-social">
            <h1>
              Get in <strong className="purple">Touch </strong>
            </h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ravics09"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/JS_Centric?t=nyKrM6oaUigAUYNtsWkuUw&s=09"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ravics09/"
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
    </Container>
  );
};

export default Contact;
