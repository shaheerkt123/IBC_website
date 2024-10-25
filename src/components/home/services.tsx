import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Services = () => {
  return (
    <section className="bg-gray-100 py-8">
      <Container>
        <Row>
          <Col>
            <div className="heading text-center">
              <span className="text-blue-600">What We Offer</span>
              <h2 className="text-2xl font-bold">
                Only unique solutions for business
              </h2>
              <p className="mt-4">
                Unlock your business potential with our expert services in
                Company Incorporation, LLP Incorporation, Trust/Society
                Formation, and Partnership Establishment.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="wrapper bg-white p-4 rounded-lg shadow-md">
              <div className="icons">
                <i className="flaticon-data-driven text-blue-600"></i>
              </div>
              <div className="content w-100">
                <h4 className="mt-2 font-semibold">Cost Consultancy</h4>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
