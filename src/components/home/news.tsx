import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const News = () => {
  return (
    <section className="bg-gray-100 py-8">
      <Container>
        <Row>
          <Col>
            <div className="heading text-center">
              <h2 className="text-2xl font-bold">Our News</h2>
            </div>
          </Col>
          {[1, 2, 3].map((index) => (
            <Col key={index} md={4} sm={6}>
              <article className="blog-sub bg-white p-4 rounded-lg shadow-md">
                <div className="blog-content">
                  <img
                    src={`../assets/images/blog/${index}.jpg`}
                    alt="Blog"
                    className="rounded-lg"
                  />
                </div>
                <div className="blog-content-section mt-4">
                  <div className="blo-content-title">
                    <h4 className="font-semibold">
                      The National Minimum Wage Is An Important Part
                    </h4>
                    <p className="mt-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Neque at numquam, asperiores aut praesentium facilis
                      ratione!
                    </p>
                  </div>
                  <div className="blog-admin mt-4">
                    <ol className="flex space-x-4">
                      <li>
                        <i className="fal fa-user-tie"></i> By Admin
                      </li>
                      <li>
                        <i className="fal fa-calendar-alt"></i> July 28, 2020
                      </li>
                    </ol>
                  </div>
                </div>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
