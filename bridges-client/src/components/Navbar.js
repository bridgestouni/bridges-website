import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../images/bridges-logo.png";
import "../styles/navbar.css";

const Navbar = () => {
  const [active, setActive] = useState();

  function toggleNav() {
    setActive(!active);
    document.querySelector("body").classList.toggle("activeNav");
  }

  return (
    <div className="nav-container">
      <Link to="/" className="nav-logo">
        <img src={Logo} className="logo" alt="Logo" />
        <h1 className="brand">bridges</h1>
      </Link>
      <div className="nav-links">
        <ul>
          <li>
            <NavLink
              to="/about"
              activeClassName="selected"
              className="nav-link"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resources"
              activeClassName="selected"
              className="nav-link"
              onClick={toggleNav}
            >
              Resources
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" activeClassName="selected" className="nav-link">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/office-hours"
              activeClassName="selected"
              className="nav-link"
            >
              Office Hours
            </NavLink>
          </li>
          <li>
            <Link to="/contact" className="nav-link nav-button">
              Contact Us
            </Link>
          </li>
          <li className="">
            <div
              className={`navBurger ${active ? "active" : ""}`}
              onClick={toggleNav}
            >
              <span className="burgerBars" id="topBar"></span>
              <span className="burgerBars" id="middleBar"></span>
              <span className="burgerBars" id="bottomBar"></span>
            </div>
          </li>
        </ul>
      </div>
      {active ? (
        <div className="nav-links-collapsed">
          <ul>
            <li className="collapsedLinkContainer">
              <NavLink to="/" className="nav-link-collapsed">
                Home
              </NavLink>
            </li>
            <li className="collapsedLinkContainer">
              <NavLink to="/about" className="nav-link-collapsed">
                About
              </NavLink>
            </li>
            <li className="collapsedLinkContainer">
              <NavLink to="/resources" className="nav-link-collapsed">
                Resources
              </NavLink>
            </li>
            <li className="collapsedLinkContainer">
              <NavLink to="/blog" className="nav-link-collapsed">
                Blog
              </NavLink>
            </li>
            <li className="collapsedLinkContainer">
              <NavLink to="/office-hours" className="nav-link-collapsed">
                Office Hours
              </NavLink>
            </li>
            <li className="collapsedLinkContainer">
              <a
                href="mailto:bridgestouniversity@gmail.com"
                className="nav-link-collapsed"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
