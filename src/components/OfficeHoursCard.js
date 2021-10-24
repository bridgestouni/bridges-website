import React from "react";
import { Link } from "react-router-dom";

import "../styles/officeHoursCard.css";

const OfficeHoursCard = (props) => {
  return (
    <div className="officeHoursCard">
      <div className="officeHoursCardImageContainer">
        <img
          className={`officeHoursCardImage ${props.firstName}OfficeHoursImage`}
          src={props.image}
          alt={`${props.firstName} Profile`}
        />
      </div>
      <div className="officeHoursCardContent">
        <div className="officeHoursCardHeader">
          <h4 className="officeHoursCardName">{props.name}</h4>
          <p className="officeHoursCardSchool">{props.school}</p>
        </div>
        <div className="officeHoursCardInfo">
          <p className="officeHoursCardBio">{props.bio}</p>
          <a
            target="_blank"
            href={props.contactLink}
            className="officeHoursCardLink"
          >{`Book time with ${props.firstName}`}</a>
        </div>
      </div>
    </div>
  );
};

export default OfficeHoursCard;
