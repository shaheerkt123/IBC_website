import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8">
      <Container>
        <Row>
          {["About Us", "Quick Links", "Contact Us", "Follow Us"].map(
            (section, index) => (
              <Col key={index} md={3} sm={6}>
                <div className="wrapper">
                  <div className="content">
                    <h2 className="font-semibold">{section}</h2>
                    {section === "About Us" && (
                      <p>We’re reimagining how you buy, sell and rent...</p>
                    )}
                    {section === "Quick Links" && (
                      <ul className="mt-2">
                        {[
                          "Home",
                          "About Us",
                          "Services",
                          "Blog",
                          "Contact Us",
                        ].map((link) => (
                          <li key={link} className="my-1">
                            <a
                              href="#"
                              className="text-gray-600 hover:text-blue-500"
                            >
                              {link}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                    {section === "Contact Us" && (
                      <ol className="mt-2">
                        <li>info@findhouse.com</li>
                        <li>Collins Street West, Victoria 8007, Australia.</li>
                        <li>+1 246-345-0695</li>
                      </ol>
                    )}
                    {section === "Follow Us" && (
                      <div className="social-media mt-2">
                        <ol className="flex space-x-4">
                          {[
                            "facebook-f",
                            "twitter",
                            "instagram",
                            "pinterest-p",
                            "dribbble",
                            "google",
                          ].map((icon) => (
                            <li key={icon}>
                              <i
                                className={`fab fa-${icon} text-gray-600 hover:text-blue-500`}
                              ></i>
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}
                  </div>
                </div>
              </Col>
            )
          )}
        </Row>
      </Container>
    </footer>
  );
};
