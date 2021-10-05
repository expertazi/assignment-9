import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";

const Contact = () => {
  const iconForCard = <FontAwesomeIcon icon={faPhoneAlt} />;
  return (
    <div>
      <div className="global-section">
        <Container>
          <Row>
            <Col className="text-center" md={12}>
              <div>
                <h5 className="section-title mt-5">// REQUEST A QUOTE</h5>
                <h2 className="section-heading-title mt-3">Contact Info</h2>
              </div>
            </Col>
            <Col md={3}>
              <div className="card contact-cart-content text-center">
                <h1 className="custom-icon">
                  <span>{iconForCard}</span>
                </h1>
                <h2>Call Us</h2>
                <p>+ (567) 1234-567-8900</p>
                <p>+ (567) 1234-567-8901</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="card contact-cart-content text-center">
                <h1 className="custom-icon">
                  <span>{iconForCard}</span>
                </h1>
                <h2>Call Us</h2>
                <p>+ (567) 1234-567-8900</p>
                <p>+ (567) 1234-567-8901</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="card contact-cart-content text-center">
                <h1 className="custom-icon">
                  <span>{iconForCard}</span>
                </h1>
                <h2>Call Us</h2>
                <p>+ (567) 1234-567-8900</p>
                <p>+ (567) 1234-567-8901</p>
              </div>
            </Col>
            <Col className="mb-4" md={3}>
              <div className="card contact-cart-content text-center">
                <h1 className="custom-icon">
                  <span>{iconForCard}</span>
                </h1>
                <h2>Call Us</h2>
                <p>+ (567) 1234-567-8900</p>
                <p>+ (567) 1234-567-8901</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
