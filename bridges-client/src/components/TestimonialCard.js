import React from "react";
import { Link } from "react-router-dom";

import "../styles/testimonialCard.css";

const TestimonialCard = (props) => {
  return (
    <div className="testimonialCard">
      <div className="cardContent">
        <p>"{props.message}"</p>
      </div>
      <div className="cardAuthor">
        <div className="authorImage"></div>
        <div className="authorDetails">
          <h5>{props.name}</h5>
          <p>{props.status}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
