import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import "../styles/pageUnderConstruction.css";

const PageUnderConstruction = () => {
  return (
    <div className="underConstructionContainer">
      <Navbar />
      <div className="underConstructionHero">
        <h2 className="underConstructionHeader">
          <i className="underConstructionIcon fas fa-wrench"></i>
          Sorry! Page is under construction.
        </h2>
        <p className="underConstructionTagline">
          Check back in later or contact{" "}
          <a href="mailto:bridgestouniversity@gmail.com">bridges</a> for more
          details.
        </p>
      </div>
    </div>
  );
};

export default PageUnderConstruction;
