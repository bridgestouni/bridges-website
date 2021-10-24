import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import TeamCard from "../components/TeamCard";

import ChiddhanyaProfile from "../images/Chiddhanya-Profile.jpeg";
import LeesaProfile from "../images/Leesa-Profile.jpeg";
import HarjotProfile from "../images/Harjot-Profile.jpeg";
import ViProfile from "../images/Vi-Profile.jpeg";
import HussainProfile from "../images/Hussain-Profile.jpeg";
import StephanieProfile from "../images/Stephanie-Profile.jpeg";
import AviProfile from "../images/Avi-Profile.jpeg";
import AndrickProfile from "../images/Andrick-Profile.jpeg";
import VarunProfile from "../images/Varun-Profile.jpeg";

import TeamPhotoDrawing from "../images/teamPhotoDrawing.png";

import "../styles/about.css";

class AboutUs extends Component {
  render() {
    return (
      <div className="about">
        <Navbar />

        <div className="aboutSection">
          <div className="aboutContent">
            <h2 className="aboutHeader">About Us</h2>
            <p className="aboutTagline">
              We're a student support initiative designed to inspire incoming
              post-secondary students as they take their first step into their
              careers.
            </p>
          </div>

          <div
            className="aboutImageContainer"
            style={{ backgroundImage: "url(" + TeamPhotoDrawing + ")" }}
          >
            {/* about img goes here */}
          </div>
        </div>

        <div className="missionSection">
          <h3 className="missionHead">Our Mission</h3>
          <p className="missionTagline">
            To guide students as they take their first step into their careers
            with dedication, tenacity, and care.
          </p>
        </div>

        <div className="visionSection">
          <h3 className="visionHead">Our Vision</h3>
          <p className="visionTagline">
            We aim to help build the next generation of students into strong and
            confident individuals and lead them into their future.
          </p>
        </div>

        <div className="valuesSection">
          <h3 className="valuesHead">We're driven by our values</h3>
          <div className="valuesContent">
            <ul>
              <li className="valuesContainer">
                <div className="valuesImageContainer">
                  <i class="valuesIcon fas fa-seedling"></i>
                </div>
                <p className="valueName">Growth</p>
              </li>
              <li className="valuesContainer">
                <div className="valuesImageContainer">
                  <i class="valuesIcon fas fa-hands-helping"></i>
                </div>
                <p className="valueName">Integrity</p>
              </li>
              <li className="valuesContainer">
                <div className="valuesImageContainer">
                  <i class="valuesIcon fas fa-check"></i>
                </div>
                <p className="valueName">Genuinity</p>
              </li>
              <li className="valuesContainer">
                <div className="valuesImageContainer">
                  <i class="valuesIcon fas fa-users"></i>
                </div>
                <p className="valueName">Accountability</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="teamSection">
          <h3 className="teamHead">The bridges Team</h3>
          <div className="teamGrid">
            <TeamCard
              image={ChiddhanyaProfile}
              firstName="chiddhanya"
              name="Chiddhanya Alagesan"
              title="Chief Executive Officer"
            />
            <TeamCard
              image={LeesaProfile}
              firstName="leesa"
              name="Leesa Panchal"
              title="Chief Executive Officer"
            />
            <TeamCard
              image={HarjotProfile}
              firstName="harjot"
              name="Harjot Suri"
              title="Chief Marketing Officer"
            />
            <TeamCard
              image={ViProfile}
              firstName="vi"
              name="Vi Vo"
              title="Chief Marketing Officer"
            />
            <TeamCard
              image={HussainProfile}
              firstName="hussain"
              name="Hussain Jan"
              title="Chief Editor"
            />
            <TeamCard
              image={StephanieProfile}
              firstName="stephanie"
              name="Stephanie Huynh"
              title="Chief Editor Officer"
            />
            <TeamCard
              image={AviProfile}
              firstName="avi"
              name="Avi Patel"
              title="Chief Technology Officer"
            />
            <TeamCard
              image={AndrickProfile}
              firstName="andrick"
              name="Andrick Punit"
              title="Head of Frontend Development"
            />
            <TeamCard
              image={VarunProfile}
              firstName="varun"
              name="Varun Garg"
              title="Head of Backend Development"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
