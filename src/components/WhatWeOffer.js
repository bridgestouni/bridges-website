import React from "react";
import { NavLink, Link } from "react-router-dom";

import ServiceCard from "./ServiceCard";

import MentorshipIcon from "../images/mentorship-icon.png";
import OfficeHoursIcon from "../images/office-hours-icon.png";
import ResourcesIcon from "../images/resources-icon.png";

import "../styles/whatWeOffer.css";

const WhatWeOffer = () => {
  return (
    <div className="whatWeOffer">
      <div className="whatWeOfferHead">
        <h3>What we Offer</h3>
        <p>
          All of our programs are free, inclusive, and accessible to everyone.
        </p>
      </div>
      <div className="servicesContainer">
        <ServiceCard
          serviceIcon={MentorshipIcon}
          serviceName="Mentorship"
          serviceDescription="A program designed to help incoming post-secondary students learn the ropes."
          serviceLink="/mentorship"
        />
        <ServiceCard
          serviceIcon={OfficeHoursIcon}
          serviceName="Office Hours"
          serviceDescription="Have a one-on-one meeting with a senior student in your field of interest."
          serviceLink="/office-hours"
        />
        <ServiceCard
          serviceIcon={ResourcesIcon}
          serviceName="Resources"
          serviceDescription="Got any questions? Here are your answers."
          serviceLink="/resources"
        />
      </div>
    </div>
  );
};

export default WhatWeOffer;
