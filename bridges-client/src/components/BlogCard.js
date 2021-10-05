import React from "react";
import { Link } from "react-router-dom";

import "../styles/blogCard.css";

import Image from "../images/bridges-logo-hero.png";
import EditArticle from "../Pages/EditArticle";

const BlogCard = (props) => {
  var coverImage = require(`../uploads/images/${props.coverImage}`);

  return (
    <div className="blogCard">
      <div className="blogCardImageContainer">
        <img src={coverImage.default} className="blogCardImage" alt="..." />
      </div>
      <div className="blogCardContent">
        <div className="blogCardInfo">
          <p className="blogCardTag">{props.tags}</p>
          <h4 className="blogCardTitle">{props.title}</h4>
          <p className="blogCardDescription">{props.description}</p>
        </div>
        <div className="blogCardLinks">
          <a href={`/blog/${props.id}`} className="blogCardReadMoreButton">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
