import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import haederImg from "../../images/about-us-main-img.jpg";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const iconForLi = <FontAwesomeIcon icon={faCheck} />;

  return (
    <div>
      <div className="global-section">
        <Container>
          <Row>
            <Col md={6}>
              <img className="global-section-img" src={haederImg} alt="" />
            </Col>
            <Col className="global-section-content" md={6}>
              <div className="about-us-hero-content">
                <h3>// About Us </h3>
                <h2>
                  Outstanding Life About <br />
                  Through Yoga
                </h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
                <ul>
                  <li>
                    <span>{iconForLi}</span> Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </li>
                  <li>
                    <span>{iconForLi}</span> Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </li>
                  <li>
                    <span>{iconForLi}</span> Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </li>
                  <li>
                    <span>{iconForLi}</span> Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </li>
                  <li>
                    <span>{iconForLi}</span> Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </li>
                  <li>
                    <span>{iconForLi}</span> Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </li>
                </ul>
                <Link className="global-section-btn" to="/services">
                  Check Our Service
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
