import React from "react";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Courses from "./Courses/Courses";

const Services = () => {
  const [loadData, setData] = useState([]);
  useEffect(() => {
    fetch("./fakedata.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col className="text-center" md={12}>
            <div>
              <h5 className="section-title mt-5">// OUR SERVICE</h5>
              <h2 className="section-heading-title mt-3 mb-3">
                Here Is Our Offered Services
              </h2>
            </div>
          </Col>
          {loadData.map((data) => (
            <Courses key={data.id} data={data}></Courses>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
