import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Courses.css";
import { Link } from "react-router-dom";

const Courses = (props) => {
  const { img, name, instructor, level, price, rating } = props.data;
  const element = <FontAwesomeIcon icon={faStar} />;
  return (
    <Col md={3} className="mb-3 mt-3">
      <Card className="h-100">
        <Card.Img variant="top" src={img} />
        <Card.Body className="text-start">
          <Card.Title className="cart-title">{name}</Card.Title>
          <p className="this-is-for-p">By:{instructor}</p>
          <div className="for-course-rating">
            <span>Level: {level}</span>
            <span>
              {" "}
              <p>
                Rating: {rating} {element}
              </p>
            </span>
          </div>
          <h2 className="mt-2 mb-3">
            <span>Price: ${price}</span>
          </h2>
          <Link to="/services" className="global-section-btn">
            Add To Cart
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Courses;
