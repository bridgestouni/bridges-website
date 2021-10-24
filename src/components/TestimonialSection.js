import React from "react";
import { Link } from "react-router-dom";

import TestimonialCard from "../components/TestimonialCard";

import "../styles/testimonialSection.css";

const TestimonialSection = () => {
  return (
    <div className="testimonialSection">
      <div className="testimonialHead">
        <h3>Trusted by hundreds of students and teachers across Canada</h3>
      </div>
      <div className="testimonialContainer">
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <TestimonialCard
                className=""
                name="Chiddhanya Alagesan"
                status="Student"
                message="Message 1"
              />
            </div>
            <div class="carousel-item">
              <TestimonialCard
                className=""
                name="Vedant Patel"
                status="Student"
                message="Message 2"
              />
            </div>
            <div class="carousel-item">
              <TestimonialCard
                className=""
                name="Vedant Patel"
                status="Student"
                message="Message 3"
              />
            </div>
            {/*<div class="carousel-item">
              <img class="d-block w-100" src="..." alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="..." alt="Third slide" />
            </div>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
