import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

import OfficeHoursCard from "../components/OfficeHoursCard";

import ChiddhanyaProfile from "../images/Chiddhanya-Profile.jpeg";
import LeesaProfile from "../images/Leesa-Profile.jpeg";
import HarjotProfile from "../images/Harjot-Profile.jpeg";
import ViProfile from "../images/Vi-Profile.jpeg";
import HussainProfile from "../images/Hussain-Profile.jpeg";
import StephanieProfile from "../images/Stephanie-Profile.jpeg";
import AviProfile from "../images/Avi-Profile.jpeg";
import AndrickProfile from "../images/Andrick-Profile.jpeg";
import VarunProfile from "../images/Varun-Profile.jpeg";

import "../styles/officeHours.css";

class OfficeHours extends Component {
  render() {
    return (
      <div className="officeHours">
        <Navbar />

        <div className="officeHoursSection">
          <div className="officeHoursHero">
            <h2 className="officeHoursHeader">Student Office Hours</h2>
            <p className="officeHoursTagline">
              Here are some awesome students who would love to help you out with
              your journey.
            </p>
            <Link to="https://www.google.com" className="volunteerLink">
              Volunteer
            </Link>
          </div>
          <div className="officeHoursGrid">
            <OfficeHoursCard
              image={ChiddhanyaProfile}
              firstName="Chiddhanya"
              name="Chiddhanya Alagesan"
              school="Ryerson University"
              bio="I am a Biomedical Science student at Ryerson University and the Co-CEO of bridges. I have also completed a minor in English. When I’m not working, I enjoy reading, watching shows on Netflix and talking to my friends!"
              contactLink="https://www.google.com"
            />
            <OfficeHoursCard
              image={LeesaProfile}
              firstName="Leesa"
              name="Leesa Panchal"
              school="Ryerson University"
              bio="I’m an accounting major at Ryerson University, pursuing a minor in law and the Co-CEO of bridges. During the rare times when I’m not behind my computer, I enjoy listening to music and spending time with my friends and family!"
              contactLink="https://www.google.com"
            />
            <OfficeHoursCard
              image={HarjotProfile}
              firstName="Harjot"
              name="Harjot Suri"
              school="Ryerson University"
              bio="I’m a Kinesiology & Health Science major and a member of the Athletic Therapy program at York University. I am the Outreach Director and HR rep at bridges and I enjoy basketball, cooking, eating goooooodd and finding good music!"
              contactLink="https://www.google.com"
            />
            <OfficeHoursCard
              image={ViProfile}
              firstName="Vi"
              name="Vi Vo"
              school="Ryerson University"
              bio="I’m a Physiology specialist and Psychology major at the University of Toronto and the Chief Marketing Officer at bridges. When I’m not studying, I’m binging kdramas, sewing/knitting, or taking cool pictures."
              contactLink="https://calendly.com/viiii/15min"
            />
            <OfficeHoursCard
              image={HussainProfile}
              firstName="Hussain"
              name="Hussain Jan"
              school="Ryerson University"
              bio="Hi! I am a medical sciences student at the University of Western Ontario and an editor here at bridges. Outside of school, I like to go biking, learning how to play the piano, and seamlessly transforming my 5min youtube breaks into 3hr hibernation sessions."
              contactLink="https://www.google.com"
            />
            <OfficeHoursCard
              image={StephanieProfile}
              firstName="Stephanie"
              name="Stephanie Huynh"
              school="Ryerson University"
              bio="I’m a Computer Science student at Ryerson University and an editor at bridges. On my off time, I enjoy rhythm games, collecting cards, and rambling about my current interests."
              contactLink="https://www.google.com"
            />
            <OfficeHoursCard
              image={AviProfile}
              firstName="Avi"
              name="Avi Patel"
              school="Ryerson University"
              bio="I study Human-Centered Design at Drexel University. I've previously worked as a designer at Fantasy Interactive and Facebook. I'm joining Facebook NY when I graduate. Outside of design, I like improv-comedy podcasts, boardgames, escape rooms, and Power Rangers comic books."
              contactLink="https://www.google.com"
            />
            <OfficeHoursCard
              image={AndrickProfile}
              firstName="Andrick"
              name="Andrick Punit"
              school="Ryerson University"
              bio="I’m a Mechanical Engineering student at Ryerson University and an Developer at bridges. On my off time, I enjoy rhythm games, collecting cards, and rambling about my current interests."
              contactLink="https://www.google.com"
            />
            <OfficeHoursCard
              image={VarunProfile}
              firstName="Varun"
              name="Varun Garg"
              school="Ryerson University"
              bio="I study Human-Centered Design at Drexel University. I've previously worked as a designer at Fantasy Interactive and Facebook. I'm joining Facebook NY when I graduate. Outside of design, I like improv-comedy podcasts, boardgames, escape rooms, and Power Rangers comic books."
              contactLink="https://www.google.com"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default OfficeHours;
