import React from "react";
import { Link } from "react-router-dom";

import NewsletterSignUp from "./NewsletterSignUp";

import Logo from "../images/bridges-logo.png";

import InstagramIcon from "../images/InstagramIcon.svg";
import TwitterIcon from "../images/TwitterIcon.svg";
import LinkedInIcon from "../images/LinkedInIcon.svg";
import TiktokIcon from "../images/TiktokIcon.svg";
import DiscordIcon from "../images/DiscordIcon.svg";
import FacebookIcon from "../images/FacebookIcon.svg";

import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerInner">
        <div className="footerCTA">
          <h2>Are your ready to build your bridges?</h2>
          <p>
            Join bridges to help navigate and overcome the obstacles in
            post-secondary.
          </p>
          <Link to="/contact" className="footerCTALinkAccent">
            Contact Us
          </Link>
        </div>
        <div className="footerLinks">
          <div className="footerLeft">
            <div className="footerBrand">
              <Link to="/" className="footer-logo">
                <img src={Logo} className="logo" alt="Logo" />
                <h2 className="footer-brand">bridges</h2>
              </Link>
            </div>
            <p className="footerTagline">
              We're a student support initiative designed to inspire incoming
              post-secondary students.
            </p>
            <div className="footerSocials">
              <ul>
                <li>
                  <Link to="...">
                    <img
                      src={InstagramIcon}
                      alt="Instagram"
                      className="footerSocialsIcon"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="...">
                    <img
                      src={LinkedInIcon}
                      alt="Instagram"
                      className="footerSocialsIcon"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="...">
                    <img
                      src={FacebookIcon}
                      alt="Instagram"
                      className="footerSocialsIcon"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="...">
                    <img
                      src={TwitterIcon}
                      alt="Instagram"
                      className="footerSocialsIcon"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="...">
                    <img
                      src={TiktokIcon}
                      alt="Instagram"
                      className="footerSocialsIcon"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="...">
                    <img
                      src={DiscordIcon}
                      alt="Instagram"
                      className="footerSocialsIcon"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footerRight">
            <div className="companyLinks linkSection">
              <h6 className="linkTitle">Company</h6>
              <ul>
                <li>
                  <Link className="sectionLink" to="...">
                    Brand
                  </Link>
                </li>
                <li>
                  <Link className="sectionLink" to="...">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="sectionLink" to="...">
                    Partnerships
                  </Link>
                </li>
              </ul>
            </div>

            <div className="OfferingsLinks linkSection">
              <h6 className="linkTitle">Offerings</h6>
              <ul>
                <li>
                  <Link className="sectionLink" to="...">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="sectionLink" to="...">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link className="sectionLink" to="...">
                    Office Hours
                  </Link>
                </li>
              </ul>
            </div>

            <div className="ExtraLinks linkSection">
              <h6 className="linkTitle">Extras</h6>
              <ul>
                <li>
                  <Link className="sectionLink" to="...">
                    Podcast
                  </Link>
                </li>
                <li>
                  <Link className="sectionLink" to="...">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link className="sectionLink" to="...">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="SubscribeCTA linkSection">
              <h6 className="linkTitle">Subscribe</h6>
              <ul>
                <li>
                  <NewsletterSignUp footer={true} />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright ©2021 by bridges&nbsp;to&nbsp;uni</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
