import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import EmailIcon from "../images/email.svg";
import RightArrow from "../images/arrow-right.svg";

import "../styles/newsletterSignUp.css";

function NewsletterSignUp(props) {
  const inputEmail = useRef();
  const formRef = useRef();
  const [errors, setErrors] = useState();

  const signUpHandler = async (e) => {
    e.preventDefault();
    console.log(inputEmail.current.value);
    try {
      const response = await fetch(
        "http://localhost:8082/newsletter-subscribe",
        {
          method: "POST",
          body: JSON.stringify({
            inputEmail: inputEmail.current.value,
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      inputEmail.current.value = "";
      try {
        const data = await response.json();
        console.log("response data?", data);
      } catch (err) {
        console.log("Error happened here!");
        console.log(err);
      }
      /*
        const data = await response.json();
        console.log(data);
        if (data.success) {
            setErrors("");
        } else {
            setErrors(data.message);
        }
        */
    } catch (err) {
      console.log("Error: " + err);
    }
  };

  if (props.hero == true) {
    return (
      <div className="newsletterSignUp">
        <form ref={formRef} className="signUpForm">
          <div className="formContent">
            <img src={EmailIcon} alt="Email Icon" className="emailIcon" />
            <input
              type="email"
              name="inputEmail"
              id="inputEmail"
              className="heroEmailInput"
              placeholder="Enter your email"
              required
              ref={inputEmail}
            />
          </div>
          <button className="heroEmailInputSubmit" onClick={signUpHandler}>
            Stay Updated
          </button>
        </form>
        <p className="signUpTagline">No spam in inbox. Unsubscribe anytime.</p>
      </div>
    );
  } else if (props.footer == true) {
    return (
      <div className="newsletterSignUpFooter">
        <form className="signUpFormFooter">
          <div className="formContentFooter">
            <input
              type="email"
              name="inputEmail"
              id="inputEmailFooter"
              className="heroEmailInputFooter"
              placeholder="Enter your email"
              required
              ref={inputEmail}
            />
          </div>
          <button
            className="heroEmailInputSubmitFooter"
            onClick={signUpHandler}
          >
            <img className="arrowFooter" src={RightArrow} alt="Right Arrow" />
          </button>
        </form>
      </div>
    );
  }
}

export default NewsletterSignUp;
