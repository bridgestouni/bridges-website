import React from "react";
import { Link } from "react-router-dom";

import "../styles/teamCard.css";

const TeamCard = (props) => {
  return (
    <div className="teamCard">
      <div className="memberImageContainer">
        <img
          className={`memberImage ${props.firstName}Image`}
          src={props.image}
          alt={`${props.name} Profile`}
        />
      </div>
      <div className="memberInfo">
        <h4>{props.name}</h4>
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default TeamCard;
