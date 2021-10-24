import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import NewsletterSignUp from "../components/NewsletterSignUp";
import WhatWeOffer from "../components/WhatWeOffer";
import FeatureSection from "../components/FeatureSection";
import TestimonialSection from "../components/TestimonialSection";
import Footer from "../components/Footer";

import HeroImage from "../images/bridges-logo-hero.png";

import "../styles/home.css";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Navbar />

        <div className="hero">
          <div className="heroContent">
            <h2 className="heroHeader">
              Let's ease your transition to University
            </h2>
            <p className="heroTagline">
              We're a student support initiative dedicated to guiding incoming
              post-secondary students as they take their first step into their
              careers.
            </p>
            <NewsletterSignUp hero={true} />
            <div className="statsContainer">
              <div className="stats">
                <h4>1400+</h4>
                <p>Students Reached</p>
              </div>
              <div className="stats">
                <h4>800+</h4>
                <p>Subscribers</p>
              </div>
              <div className="stats">
                <h4>20+</h4>
                <p>Programs and Institutions</p>
              </div>
            </div>
          </div>
          <div className="heroImageContainer">
            <img
              src={HeroImage}
              alt="Student drinking coffee"
              className="heroImage"
            />
          </div>
        </div>

        <WhatWeOffer />

        <FeatureSection />

        {/*<TestimonialSection />*/}
      </div>
    );
  }
}

export default Home;
