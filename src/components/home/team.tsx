import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Team = () => {
  const members = ["James", "Albert", "Johns", "Smith"];
  return (
    <section className="bg-gray-100 py-8">
      <Container>
        <Row>
          <Col>
            <div className="heading text-center">
              <h2 className="text-2xl font-bold">Our Team</h2>
            </div>
          </Col>
          {members.map((member, index) => (
            <Col key={index} md={3} sm={6}>
              <div className="team-wrapper bg-white p-4 rounded-lg shadow-md">
                <div className="team-img">
                  <img
                    src={`../assets/images/team/${index + 1}.jpg`}
                    alt={member}
                    className="rounded-lg"
                  />
                </div>
                <div className="team-content text-center">
                  <h3 className="mt-2 font-semibold">{member}</h3>
                  <p>
                    {["Designer", "Art Designer", "SEO", "Developer"][index]}
                  </p>
                  <ul className="flex justify-center space-x-4 mt-2">
                    {[
                      "facebook-f",
                      "twitter",
                      "linkedin-in",
                      "google-plus-g",
                      "behance",
                    ].map((icon) => (
                      <li key={icon}>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-blue-500"
                        >
                          <i className={`fab fa-${icon}`}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
