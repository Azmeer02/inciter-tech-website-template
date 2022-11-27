import React from "react";
import { Carousel } from "antd";

const Header = () => {
  return (
    <div className="header_container">
      <div className="header_carousel_container">
        <Carousel autoplay dotPosition="left">
          <div className="header_slides">
            <img src="/assets/Slider01.jpg" alt="Slider Image 01" />
            <div className="header_carousel_content">
              <h2>DESIGN, DEVELOP, DELIVER</h2>
              <p>
                We make custom Mobile Apps, Web & Enterprise Solutions. We serve
                startups to scale and work from ideation to delivery. With sheer
                customer satisfaction in mind, we are profoundly dedicated to
                developing highly intriguing apps that strictly meet the
                business requirements and catering a wide spectrum of projects.
              </p>
            </div>
          </div>
          <div className="header_slides">
            <img src="/assets/Slider02.jpeg" alt="Slider Image 02" />
            <div className="header_carousel_content">
              <h2>Scalable AI to transform your business</h2>
              <p>
                One stop shop for innovation and applied R&D in AI, Machine
                Learning and Data Analytics.
              </p>
            </div>
          </div>
          <div className="header_slides">
            <img src="/assets/Slider03.jpeg" alt="Slider Image 03" />
            <div className="header_carousel_content">
              <h2>Captivating and Interactive Visuals</h2>
              <p>
                Inciter Tech is a team of proficient, creative, and efficient
                millennials who are incessantly improving their skills in their
                field of expertise.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Header;
