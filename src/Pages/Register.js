import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { connect } from "react-redux";

import PropTypes from "prop-types";
import classnames from "classnames";

import "../styles/register.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8082/api/users/register", {
        method: "POST",
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          password2: this.state.password2,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      try {
        const data = await response.json();
        console.log("response data?", data);
      } catch (err) {
        console.log("Error happened here!");
        console.log(err);
      }
    } catch (err) {
      console.log("Error: " + err);
    }

    // this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="register">
        <h4>Register Page</h4>
        <form noValidate onSubmit={this.onSubmit}>
          <div className="input-field">
            <input
              onChange={this.onChange}
              value={this.state.name}
              error={errors.name}
              id="name"
              type="text"
              className={classnames("", {
                invalid: errors.name,
              })}
            />
            <label htmlFor="name">Name</label>
            <span className="red-text">{errors.name}</span>
          </div>
          <div className="input-field">
            <input
              onChange={this.onChange}
              value={this.state.email}
              error={errors.email}
              id="email"
              type="email"
              className={classnames("", {
                invalid: errors.email,
              })}
            />
            <label htmlFor="email">Email</label>
            <span className="red-text">{errors.email}</span>
          </div>
          <div className="input-field">
            <input
              onChange={this.onChange}
              value={this.state.password}
              error={errors.password}
              id="password"
              type="password"
              className={classnames("", {
                invalid: errors.password,
              })}
            />
            <label htmlFor="password">Password</label>
            <span className="red-text">{errors.password}</span>
          </div>
          <div className="input-field">
            <input
              onChange={this.onChange}
              value={this.state.password2}
              error={errors.password2}
              id="password2"
              type="password"
              className={classnames("", {
                invalid: errors.password2,
              })}
            />
            <label htmlFor="password2">Confirm Password</label>
            <span className="red-text">{errors.password2}</span>
          </div>
          <div className="">
            <button type="submit" className="btn btn-large">
              Sign up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
