import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

import "../styles/contact.css";

class ContactUs extends Component {
  render() {
    return (
      <div className="contact">
        <Navbar />
      </div>
    );
  }
}

export default ContactUs;
