import React from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../../assets/images/banner/slider-01.jpg";
import slider2 from "../../assets/images/banner/slider-02.jpg";
import slider3 from "../../assets/images/banner/slider-03.jpg";

export const Slider = () => {
  return (
    <Carousel className="rounded-lg shadow-lg mt-20">
      <Carousel.Item>
        <img className="d-block w-full" src={slider1} alt="Slide 1" />
        <Carousel.Caption className="bg-black bg-opacity-50 rounded-lg p-4">
          <h3 className="text-5xl text-white">Welcome to IBC</h3>
          <p className="text-white">
            Your partner in incorporations and business consultancy
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Learn More
            </a>
            <a
              href="#"
              className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Get In Touch
            </a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-full" src={slider2} alt="Slide 2" />
        <Carousel.Caption className="bg-black bg-opacity-50 rounded-lg p-4">
          <h3 className="text-5xl text-white">Making your business</h3>
          <p className="text-white">ideas Come true</p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Learn More
            </a>
            <a
              href="#"
              className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Get In Touch
            </a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-full" src={slider3} alt="Slide 3" />
        <Carousel.Caption className="bg-black bg-opacity-50 rounded-lg p-4">
          <h3 className="text-5xl text-white">Making your business</h3>
          <p className="text-white">ideas Come true</p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Learn More
            </a>
            <a
              href="#"
              className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Get In Touch
            </a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
