import React from "react";
import { Card, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./DataForHome.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Rating from "react-rating";

const DataForHome = (props) => {
  console.log(props);

  const { img, name, instructor, level, price, rating } = props.data;
  const element = <FontAwesomeIcon icon={faStar} />;
  return (
    <Col md={3}>
      <Card className="h-100">
        <Card.Img variant="top" src={img} />
        <Card.Body className="text-start">
          <Card.Title className="cart-title">{name}</Card.Title>
          <p className="this-is-for-p">By:{instructor}</p>
          <div className="for-course-rating">
            <span>Level: {level}</span>
            <span>
              <Rating
                initialRating={rating}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                readonly
              ></Rating>
            </span>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="mt-2 mb-3">
              <span>${price}</span>
            </h2>
            <Link to="/services" className="global-section-btn">
              Add To Cart
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DataForHome;
