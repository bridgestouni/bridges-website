import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

import "../styles/resources.css";

class Resources extends Component {
  render() {
    return (
      <div className="resources">
        <Navbar />
      </div>
    );
  }
}

export default Resources;
