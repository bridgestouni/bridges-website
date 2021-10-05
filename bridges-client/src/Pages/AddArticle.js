import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../images/bridges-logo.png";
import $ from "jquery";

import "../styles/addArticle.css";

class AddArticle extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      topic: "",
      tags: "",
      type: "",
      author: "",
      description: "",
      published_date: "",
      coverImage: "",
    };
  }

  submitArticle = async (e) => {
    e.preventDefault();

    console.log("Submitting Article..");

    const url = "http://localhost:8082/api/articles";

    var bodyTypeInputs = document.querySelectorAll("select[name='bodyType']");
    var bodyInputs = document.querySelectorAll("input[name='body']");
    // var bodyImageInputs = document.querySelectorAll("input[name='bodyImage']");

    var bodyType = [];
    var body = [];
    // var bodyImage = [];

    bodyTypeInputs.forEach(function (input) {
      bodyType.push(input.value);
    });

    bodyInputs.forEach(function (input) {
      body.push(input.value);
    });

    // bodyImageInputs.forEach(function (input) {
    //   bodyImage.push(input.files[0]);
    // });

    //const formData = new FormData();

    console.log(bodyType);
    console.log(body);

    for (var i = 0; i < body.length; ++i) {
      console.log("Non fixed body: " + body[i]);
      body[i] = body[i].replaceAll(",", "<comma>").trim();
      console.log("Fixed body: " + body[i]);
    }

    console.log(body);

    //console.log(this.state.coverImage);

    console.log("Current State Title: " + this.state.title);

    var fd = new FormData();
    fd.append("title", this.state.title);
    fd.append("topic", this.state.topic);
    fd.append("tags", this.state.tags);
    fd.append("type", this.state.type);
    fd.append("author", this.state.author);
    fd.append("description", this.state.description);
    fd.append("published_date", this.state.published_date);
    fd.append("coverImage", this.state.coverImage);
    fd.append("body", JSON.stringify(body));
    fd.append("bodyType", JSON.stringify(bodyType));

    // Display the key/value pairs
    for (var pair of fd.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    try {
      const response = fetch(url, {
        body: fd,
        method: "POST",
      }).then(() => {
        this.props.history.push("/admin");
      });
    } catch (err) {
      console.log("Fetch Error: " + err);
    }
  };

  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handlePhoto = (e) => {
    this.setState({
      [e.target.id]: e.target.files[0],
    });
    // console.log(e.target.files[0]);
  };

  addElement = () => {
    var container = document.querySelector(".articleBodyContainer");

    var elementTypeSelector = document.querySelector("#elementType");
    var elementType =
      elementTypeSelector.options[elementTypeSelector.selectedIndex].value;
    console.log(elementType);

    var template = "";

    if (elementType === "paragraph") {
      template = `
        <div class="templateHead">
            <select name="bodyType" id="templateInputType">
                <option value="paragraph">Paragraph</option>
            </select>
            <button class="templateDelete" type="button">Delete</button>
        </div>
        <div class="templateBody">
            <input class="paragraphInput" type="text" name="body"/>
        </div>
    `;
    } else if (elementType === "subhead") {
      template = `
        <div class="templateHead">
        <select name="bodyType" id="templateInputType">
            <option value="subhead">Subhead</option>
        </select>
            <button class="templateDelete" type="button">Delete</button>
        </div>
        <div class="templateBody">
            <input class="subheadInput" type="text" name="body"/>
        </div>
    `;
    } else {
      template = `
        <div class="templateHead">
        <select name="bodyType" id="templateInputType">
            <option value="image">Image</option>
        </select>
            <button class="templateDelete" type="button">Delete</button>
        </div>
        <div class="templateBody">
            <input type="file" accept=".png, .jpg, .jpeg" name="bodyImage" onChange={handlePhoto}/>
        </div>
        `;
    }

    let div = document.createElement("div");
    div.classList.add("articleBodyItem");
    div.innerHTML = template;
    container.appendChild(div);

    var deleteButtons = document.querySelectorAll(".templateDelete");
    for (var i = 0; i < deleteButtons.length; ++i) {
      deleteButtons[i].onclick = function (e) {
        // console.log(e.target);
        var container = document.querySelector(".articleBodyContainer");
        container.removeChild(e.target.parentElement.parentElement);
        // console.log(e.target.parentElement.parentElement);
      };
    }
  };

  render() {
    return (
      <div className="addArticleContainer">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <img src={Logo} className="logo" alt="Logo" />
            <h1 className="brand">bridges</h1>
          </Link>
          <div className="nav-links">
            <ul>
              <li>
                <NavLink to="/" className="nav-link nav-button">
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="addArticleHero">
          <div className="heroText">
            <h2 className="addArticleHeader">Add Article</h2>
            <p className="addArticleTagline">
              Note: Saving mid-article creation and repositioning elements is
              not supported yet. For help, refer to:
              &lt;&lt;documentation&gt;&gt;.
            </p>
            <Link to="/admin" className="addArticleTaglineButton">
              Back to Admin Dashboard
            </Link>
          </div>
        </div>
        <div className="addArticleFormContainer">
          <form
            id="addArticleForm"
            class="addArticleForm"
            onSubmit={this.submitArticle}
            encType="multipart/form-data"
            method="post"
          >
            <div className="addArticleFormSec1">
              <p className="secTitle">Article Information</p>
              <div className="formGroup">
                <label for="title">Title</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  required
                  placeholder="Article Title"
                  onChange={this.onChange}
                />
              </div>
              <div className="formGroup">
                <label for="coverImage">Cover Image</label>
                <input
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  name="coverImage"
                  id="coverImage"
                  onChange={this.handlePhoto}
                />
              </div>
              <div className="formGroup">
                <label for="topic">Topic</label>
                <input
                  type="text"
                  name="topic"
                  id="topic"
                  required
                  placeholder="Article Topic"
                  onChange={this.onChange}
                />
              </div>
              <div className="formGroup">
                <label for="tags">Tags</label>
                <input
                  type="text"
                  name="tags"
                  id="tags"
                  required
                  placeholder="Article Tags"
                  onChange={this.onChange}
                />
              </div>
              <div className="formGroup">
                <label for="type">Type</label>
                <input
                  type="text"
                  name="type"
                  id="type"
                  required
                  placeholder="Article Type"
                  onChange={this.onChange}
                />
              </div>
              <div className="formGroup">
                <label for="author">Author</label>
                <input
                  type="text"
                  name="author"
                  id="author"
                  required
                  placeholder="Article Author"
                  onChange={this.onChange}
                />
              </div>
              <div className="formGroup">
                <label for="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  rows="3"
                  placeholder="Article Description"
                  required
                  onChange={this.onChange}
                ></textarea>
              </div>
              <div className="formGroup">
                <label for="published_date">Published Date</label>
                <input
                  type="date"
                  name="published_date"
                  id="published_date"
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="addArticleFormSec2">
              <p className="secTitle">Article Body</p>
              <div class="articleBody">
                <div class="articleBodyContainer"></div>
                <div class="articleBodyGeneratorContainer">
                  <select name="elementType" id="elementType">
                    <option value="subhead">Subhead</option>
                    <option value="paragraph">Paragraph</option>
                    {/* <option value="image">Image</option> */}
                  </select>
                  <button type="button" onClick={this.addElement}>
                    Add Element
                  </button>
                </div>
              </div>
            </div>
            <button className="addArticleFormSubmitButton" type="submit">
              Add Article
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddArticle;
