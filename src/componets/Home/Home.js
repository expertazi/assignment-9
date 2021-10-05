import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import haederImg from "../../images/header-img.png";
import secondSecImg from "../../images/second-section-img.jpg";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import DataForHome from "../DataForHome/DataForHome";

const Home = () => {
  const [loadData, setData] = useState([]);
  useEffect(() => {
    fetch("./fakedata.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <div className="global-section">
        <Container>
          <Row>
            <Col md={6}>
              <img className="global-section-img" src={haederImg} alt="" />
            </Col>
            <Col className="global-section-content" md={6}>
              <div>
                <h3>// Wellcome To our Yog</h3>
                <h2>
                  Fitness For The Services <br />
                  Body And Soul{" "}
                </h2>
                <p>
                  It is a long Lorem Ipsum is simply dummy text established fact
                  that a reader will be
                  <br />
                  distracted by the readable content of a page when looking at
                  its layout.
                </p>
                <Link className="global-section-btn" to="/services">
                  Check Our Service
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      ,
      <div className="second-section">
        <Container>
          <Row>
            <Col className="global-section-content" md={7}>
              <div>
                <h3>// ABOUT US</h3>
                <h2>
                  Tack Your Yoga To The <br />
                  Next Level With Us{" "}
                </h2>
                <p>
                  It is a long Lorem Ipsum is simply dummy text established fact
                  that a reader will be
                  <br />
                  distracted by the readable content of a page when looking at
                  its layout. It is a long <br />
                  Lorem Ipsum is simply dummy text established fact that a
                  reader will be distracted <br />
                  by the readable content of a page when looking at its layout.
                </p>
                <Link className="global-section-btn" to="/about-us">
                  See About Us
                </Link>
              </div>
            </Col>
            <Col md={5}>
              <img className="global-section-img" src={secondSecImg} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
      ,
      <div className="global-section">
        <Container>
          <Row>
            <Col className="text-center" md={12}>
              <div>
                <h5 className="section-title">// OUR SERVICE</h5>
                <h2 className="section-heading-title mt-3">
                  We Offer Different Services
                </h2>
                <Row className="mt-5">
                  {loadData.slice(0, 4).map((newData) => (
                    <DataForHome key={newData.id} data={newData}></DataForHome>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      ,
      <div className="second-section">
        <Container>
          <Row>
            <h5 className="section-title text-center">// Our Instactors</h5>
            <h2 className="section-heading-title text-center mt-3 mb-5">
              Meet With Our Professional Trainer
            </h2>
            <Col className="global-section-content" md={3}>
              <div>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="http://yog.gentechtree.com/wp-content/uploads/2021/04/2-2-1.jpg"
                  />
                  <Card.Body className="text-center">
                    <Card.Title className="cart-titlte">
                      Cecila Pereria
                    </Card.Title>
                    <Card.Text>Best Yoga Teacher</Card.Text>
                    <Link className="global-section-btn" to="/contact">
                      Contact Us
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col className="global-section-content" md={3}>
              <div>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="http://yog.gentechtree.com/wp-content/uploads/2021/04/1-1-1.jpg"
                  />
                  <Card.Body className="text-center">
                    <Card.Title className="cart-titlte">
                      Michal Smart
                    </Card.Title>
                    <Card.Text>Best Yoga Trainer </Card.Text>
                    <Link className="global-section-btn" to="/contact">
                      Contact Us
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col className="global-section-content" md={3}>
              <div>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="http://yog.gentechtree.com/wp-content/uploads/2021/04/team-img-psd-1.jpg"
                  />
                  <Card.Body className="text-center">
                    <Card.Title className="cart-titlte">Alex Martin</Card.Title>
                    <Card.Text>Trainer</Card.Text>
                    <Link className="global-section-btn" to="/contact">
                      Contact Us
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col className="global-section-content" md={3}>
              <div>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="http://yog.gentechtree.com/wp-content/uploads/2021/04/Yoga-Man_team-1.jpg"
                  />
                  <Card.Body className="text-center">
                    <Card.Title className="cart-titlte">Nahid Smith</Card.Title>
                    <Card.Text>Yoga Master</Card.Text>
                    <Link className="global-section-btn" to="/contact">
                      Contact Us
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
