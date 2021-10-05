import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Page404.css";

const Page404 = () => {
  return (
    <div>
      <Container>
        <Row>
          <div className="text-center not-found-page">
            <h1>404</h1>
            <h2>404 Error</h2>
            <h5>Oops! This Page is Not Found.</h5>
            <Link to="/home" className="global-section-btn ">
              Back To Home
            </Link>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Page404;
