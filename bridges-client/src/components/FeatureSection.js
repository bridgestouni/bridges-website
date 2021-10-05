import React from "react";
import { Link } from "react-router-dom";

import "../styles/featureSection.css";

import StudentsByStudents from "../images/forStudentsByStudents.jpeg";

const FeatureSection = () => {
  return (
    <div className="featureSection">
      <div
        className="featureImageContainer"
        style={{ backgroundImage: "url(" + StudentsByStudents + ")" }}
      >
        {/* <img className="featureImage" src={}/> */}
      </div>
      <div className="featureContent">
        <h3 className="featureTitle">For Students, led by Students</h3>
        <p>
          Bridges to University is a free student support initiative designed to
          help ease the transition from high school to post-secondary.
        </p>
        <p>
          We aim to inspire students as they take their first step into their
          careers by providing a central location for advice to any questions
          related to post-secondary education, student life and much more!
        </p>
        <a href="/about" className="featureLink">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default FeatureSection;
