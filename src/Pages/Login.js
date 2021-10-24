import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import PropTypes from "prop-types";
import classnames from "classnames";

import "../styles/login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    //this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="login">
        <h4>Login Page</h4>
        <form noValidate onSubmit={this.onSubmit}>
          <div className="input-field">
            <input
              onChange={this.onChange}
              value={this.state.email}
              error={errors.email}
              id="email"
              type="email"
              className={classnames("", {
                invalid: errors.email || errors.emailnotfound,
              })}
            />
            <label htmlFor="email">Email</label>
            <span className="red-text">
              {errors.email}
              {errors.emailnotfound}
            </span>
          </div>
          <div className="input-field">
            <input
              onChange={this.onChange}
              value={this.state.password}
              error={errors.password}
              id="password"
              type="password"
              className={classnames("", {
                invalid: errors.password || errors.passwordincorrect,
              })}
            />
            <label htmlFor="password">Password</label>
            <span className="red-text">
              {errors.password}
              {errors.passwordincorrect}
            </span>
          </div>
          <div className="">
            <button type="submit" className="btn btn-large">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
