import React from "react";
import { Link } from "react-router-dom";

import "../styles/DashboardArticleCard.css";

import Image from "../images/bridges-logo-hero.png";
import EditArticle from "../Pages/EditArticle";

const DashboardArticleCard = (props) => {
  var coverImage = require(`../uploads/images/${props.coverImage}`);

  const deleteArticle = async (articleId) => {
    console.log("Deleting articles..");

    const url = "http://localhost:8082/api/articles";

    try {
      const response = await fetch(`${url}/${articleId}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
    } catch (err) {
      console.log("Error: " + err);
    }

    console.log("Articles deleted..");

    window.location.reload(false);
  };

  return (
    <div className="dashboardArticleCard">
      <div className="dashboardArticleCardImageContainer">
        <img
          src={coverImage.default}
          className="dashboardArticleCardImage"
          alt="..."
        />
      </div>
      <div className="dashboardArticleCardContent">
        <div className="dashboardArticleCardInfo">
          <p className="dashboardArticleCardTag">{props.tags}</p>
          <h4 className="dashboardArticleCardTitle">{props.title}</h4>
          <p className="dashboardArticleCardDescription">{props.description}</p>
        </div>
        <div className="dashboardArticleCardLinks">
          <a
            href={`/admin/edit-article/:${props.id}`}
            className="dashboardArticleCardEditButton dashboardArticleCardButton"
            onClick={(e) => {
              //   e.preventDefault();
            }}
          >
            Edit Article
          </a>
          <a
            href="/"
            className="dashboardArticleCardDeleteButton dashboardArticleCardButton"
            onClick={(e) => {
              e.preventDefault();
              deleteArticle(props.id);
            }}
          >
            Delete Article
          </a>
        </div>
      </div>
    </div>
  );
};

export default DashboardArticleCard;
