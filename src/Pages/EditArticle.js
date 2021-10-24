import React, { Component, useEffect } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import Logo from "../images/bridges-logo.png";
import $ from "jquery";

import "../styles/editArticle.css";

class EditArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      topic: "",
      tags: "",
      type: "",
      author: "",
      description: "",
      published_date: "",
      coverImage: "",
      body: [],
      bodyType: [],
      articleId: this.props.match.params.id.substring(1),
    };
  }

  componentDidMount() {
    this.loadSavedArticleContent();
  }

  loadSavedArticleContent = async () => {
    // e.preventDefault();

    console.log("Editing Article..");
    console.log("Article ID: " + this.state.articleId);

    const url = `http://localhost:8082/api/articles/${this.state.articleId}`;

    try {
      const response = await fetch(url);
      try {
        const json = await response.json();
        console.log(json);

        this.setState({
          title: json.title,
          topic: json.topic,
          tags: json.tags,
          type: json.type,
          author: json.author,
          description: json.description,
          published_date: json.published_date,
          body: json.body[0].split(","),
          bodyType: json.bodyType[0].split(","),
        });
      } catch (err) {
        console.log("JSON error: " + err);
      }
    } catch (err) {
      console.log("Fetch Error: " + err);
    }

    console.log("Current State:");
    console.log(this.state);

    var titleInput = document.querySelector("#title");
    titleInput.value = this.state.title;

    var topicInput = document.querySelector("#topic");
    topicInput.value = this.state.topic;

    var tagsInput = document.querySelector("#tags");
    tagsInput.value = this.state.tags;

    var typeInput = document.querySelector("#type");
    typeInput.value = this.state.type;

    var authorInput = document.querySelector("#author");
    authorInput.value = this.state.author;

    var descriptionInput = document.querySelector("#description");
    descriptionInput.value = this.state.description;

    var dateInput = document.querySelector("#published_date");
    dateInput.value = this.state.published_date;

    // console.log(JSON.parse(this.state.body));

    // var bodyArray = this.state.body.split(",");
    // console.log(bodyArray);

    var container = document.querySelector(".articleBodyContainer");
    var template = "";

    var bodyFix = [];
    for (var i = 0; i < this.state.body.length; ++i) {
      bodyFix[i] = this.state.body[i].replaceAll("<comma>", ",").trim();
    }

    console.log("body fix check:");
    console.log(bodyFix);

    this.setState({
      body: bodyFix,
    });

    for (var i = 0; i < this.state.body.length; ++i) {
      if (this.state.bodyType[i] == "paragraph") {
        console.log("Paragraph..");
        template = `
        <div class="templateHead">
            <select name="bodyType" id="templateInputType">
                <option value="paragraph">Paragraph</option>
            </select>
            <button class="templateDelete" type="button">Delete</button>
        </div>
        <div class="templateBody">
            <input class="paragraphInput" type="text" name="body" value="${this.state.body[i]}"/>
        </div>
    `;
      } else {
        console.log("Subtitle..");
        template = `
        <div class="templateHead">
        <select name="bodyType" id="templateInputType">
            <option value="subhead">Subhead</option>
        </select>
            <button class="templateDelete" type="button">Delete</button>
        </div>
        <div class="templateBody">
            <input class="subheadInput" type="text" name="body" value="${this.state.body[i]}"/>
        </div>
    `;
      }
      console.log("Body type: " + this.state.body[i]);

      let div = document.createElement("div");
      div.classList.add("articleBodyItem");
      div.innerHTML = template;
      container.appendChild(div);
    }

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

  submitArticle = async (e) => {
    e.preventDefault();

    console.log("Updating Article..");

    const url = `http://localhost:8082/api/articles/edit-article/${this.state.articleId}`;

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
    fd.append("body", body);
    // for (var i = 0; i < body.length; ++i) {
    //   fd.append("body[]", body[i]);
    // }
    fd.append("bodyType", bodyType);
    // for (var i = 0; i < bodyType.length; ++i) {
    //   fd.append("bodyType[]", bodyType[i]);
    // }

    // Display the key/value pairs
    for (var pair of fd.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    try {
      const response = fetch(url, {
        body: fd,
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
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
      <div className="editArticleContainer">
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
        <div className="editArticleHero">
          <div className="heroText">
            <h2 className="editArticleHeader">Edit Article</h2>
            <p className="editArticleTagline">
              Note: Saving mid-article creation and repositioning elements is
              not supported yet. For help, refer to:
              &lt;&lt;documentation&gt;&gt;.
            </p>
            <Link to="/admin" className="editArticleTaglineButton">
              Back to Admin Dashboard
            </Link>
          </div>
        </div>
        <div className="editArticleFormContainer">
          <form
            id="editArticleForm"
            class="editArticleForm"
            onSubmit={this.submitArticle}
          >
            <div className="editArticleFormSec1">
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
            <div className="editArticleFormSec2">
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
            <button className="editArticleFormSubmitButton" type="submit">
              Update Article
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default EditArticle;
