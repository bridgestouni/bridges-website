import React from "react";
import { Link } from "react-router-dom";

import "../styles/serviceCard.css";

const ServiceCard = (props) => {
  return (
    <div className="serviceCard">
      <div className="cardIconContainer">
        <img className="cardIcon" src={props.serviceIcon} alt="" />
      </div>
      <div className="cardContent">
        <div className="cardTitle">
          <h4>{props.serviceName}</h4>
        </div>
        <p>{props.serviceDescription}</p>
        <a href={props.serviceLink} className="cardLink">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
