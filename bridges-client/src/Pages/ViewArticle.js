import React, { Component } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

import Logo from "../images/bridges-logo.png";

import BlogCard from "../components/BlogCard";

import "../styles/viewArticle.css";

class ViewArticle extends Component {
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
      articleId: this.props.match.params.id,
      latestArticles: [],
    };
  }

  componentDidMount() {
    this.loadArticle();
    this.loadLatestArticles();
  }

  //   componentDidUpdate() {
  //     this.loadArticle();
  //     this.loadLatestArticles();
  //   }

  loadLatestArticles = async () => {
    console.log("Loading latest articles..");

    const url = "http://localhost:8082/api/articles";

    try {
      const response = await fetch(url);
      const json = await response.json();
      this.setState({
        latestArticles: json.slice(0, 3),
      });
      console.log("Latest three articles: ");
      console.log(this.state.latestArticles);
    } catch (err) {
      console.log("Error: " + err);
    }

    console.log("Articles loaded..");
  };

  loadArticle = async () => {
    console.log("Loading article..");

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
          coverImage: require(`../uploads/images/${json.coverImage}`),
          body: json.body[0].split(","),
          bodyType: json.bodyType[0].split(","),
        });
      } catch (err) {
        console.log("JSON error: " + err);
      }
    } catch (err) {
      console.log("Fetch Error: " + err);
    }

    const date = new Date(this.state.published_date).toLocaleDateString(
      "en-US",
      {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );

    // for (var i = 0; i < this.state.body.length; ++i) {
    //   this.setState({
    //     body: this.state.body.map((item) => {
    //       item = item.replace("<comma>", ",");
    //     }),
    //   });
    // }

    // this.state.body.map((item) => {
    //   console.log(item);
    // });

    // this.setState({
    //   body: this.state.body.map((item) => {
    //     console.log(item);
    //     item = item.replace("<comma>", ",");
    //   }),
    // });

    // var bodyFix = this.state.body.map((item) => {
    //   item = item.replace("<comma>", ",");
    // });

    var bodyFix = [];
    for (var i = 0; i < this.state.body.length; ++i) {
      bodyFix[i] = this.state.body[i].replaceAll("<comma>", ",").trim();
    }

    console.log("body fix check:");
    console.log(bodyFix);

    this.setState({
      body: bodyFix,
    });

    console.log("body check:");
    console.log(this.state.body);

    console.log(date);
    this.setState({
      published_date: date,
    });

    console.log("Current State:");
    console.log(this.state);

    var container = document.querySelector(".articleBody");
    var template = "";

    for (var i = 0; i < this.state.bodyType.length; ++i) {
      console.log("Adding elements..");
      if (this.state.bodyType[i] == "paragraph") {
        template = `<p class="articleParagraph">${this.state.body[i]}</p>`;
        // console.log(this.state.body[i]);
      } else {
        template = `<p class="articleSubtitle">${this.state.body[i]}</p>`;
        // console.log(this.state.body[i]);
      }
      let div = document.createElement("div");
      div.classList.add("articleBodyItem");
      //   console.log(template);
      div.innerHTML = template;
      //   console.log(div);
      container.appendChild(div);
    }
  };

  render() {
    return (
      <div className="viewArticle">
        <Navbar />
        <div className="articleContainer">
          <div class="articleHeader">
            <p className="articleTag">{this.state.tags}</p>
            <h2 className="articleTitle">{this.state.title}</h2>
            <p className="articlePublishDate">
              Posted {this.state.published_date}
            </p>
          </div>
          <div className="articleCoverImageContainer">
            <img
              src={this.state.coverImage.default}
              className="articleCoverImage"
              alt="..."
            />
          </div>
          <div className="articleBody"></div>
        </div>
        <div className="latestNewsContainer">
          <div className="latestNewsHeader">
            <h3 className="latestNewsTitle">Our Latest News</h3>
            <Link to="/blog" className="latestNewsButton">
              View All
            </Link>
          </div>
          {this.state.latestArticles.length == 0 ? null : (
            <div className="latestNewsArticlesContainer">
              {this.state.latestArticles.map((article) => {
                return (
                  <BlogCard
                    title={article.title}
                    coverImage={"test-background.jpg"}
                    tags={article.tags}
                    description={article.description}
                    id={article._id}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ViewArticle;
