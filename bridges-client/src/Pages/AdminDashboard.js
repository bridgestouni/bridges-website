import React, { Component, useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

import Logo from "../images/bridges-logo.png";
import BookIcon from "../images/book.png";

import DashboardArticleCard from "../components/DashboardArticleCard";

import "./../styles/adminDashboard.css";

const AdminDashboard = () => {
  const [articles, setArticles] = useState([]);

  const articleFilterRef = useRef("all");
  const inputArticleSearch = useRef();
  const articleSearchFormRef = useRef();
  // const noArticles = useRef(false);

  const [noArticles, setNoArticles] = useState(false);

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = async () => {
    console.log("Loading articles..");

    const url = "http://localhost:8082/api/articles";

    try {
      const response = await fetch(url);
      const json = await response.json();
      setArticles(json);

      console.log("NoArticles: " + noArticles);
    } catch (err) {
      console.log("Error: " + err);
    }

    console.log("Articles loaded..");
    toggleFilter();
  };

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

    loadArticles();
  };

  const submitSearchForm = (e) => {
    e.preventDefault();
    searchArticles();
  };

  const searchArticles = async () => {
    var searchArticleString = inputArticleSearch.current.value.toLowerCase();
    var searchArticleFilter = articleFilterRef.current.toLowerCase();
    const url = "http://localhost:8082/api/articles";

    try {
      const response = await fetch(url);
      const json = await response.json();
      // console.log(json);
      const searchedArticles = json.filter((article) => {
        if (
          !(
            article.title.toLowerCase().includes(searchArticleString) ||
            article.topic.toLowerCase().includes(searchArticleString) ||
            article.tags.toLowerCase().includes(searchArticleString) ||
            article.author.toLowerCase().includes(searchArticleString) ||
            article.description.toLowerCase().includes(searchArticleString) ||
            article.type.toLowerCase().includes(searchArticleString)
          )
        ) {
          return false;
        }

        if (searchArticleFilter == "all" || searchArticleFilter == "") {
          return true;
        } else {
          if (article.tags.toLowerCase().includes(searchArticleFilter)) {
            return true;
          } else {
            return false;
          }
        }
      });

      console.log("Articles searched..");
      console.log("Search results:");

      console.log(searchedArticles);
      setArticles(searchedArticles);

      if (searchedArticles.length == 0) {
        setNoArticles(true);
        console.log("noArticles value changed to true");
      } else {
        setNoArticles(false);
        console.log("noArticles value changed to false");
      }

      console.log("NoArticles: " + noArticles);
    } catch (err) {
      console.log("Error: " + err);
    }
  };

  const toggleFilter = (e = null) => {
    var filters = document.querySelectorAll(".filterButton");
    for (var i = 0; i < filters.length; ++i) {
      filters[i].classList.remove("activeFilter");
    }
    if (e != null) {
      e.target.classList.add("activeFilter");
      articleFilterRef.current = e.target.textContent.toLowerCase();
    } else {
      filters[0].classList.add("activeFilter");
      articleFilterRef.current = "all";
    }
    searchArticles();
  };

  return (
    <div className="adminContainer">
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
      <div className="adminHero">
        <div className="heroText">
          <h2 className="adminHeader">Admin Dashboard</h2>
          <p className="adminTagline">
            Create, edit or delete (only if you really need to) articles
          </p>
        </div>
        <div className="heroSearch">
          {/* add search articles component here */}

          <form ref={articleSearchFormRef} className="searchArticlesForm">
            <div className="articlesFormContent">
              <img src={BookIcon} alt="Email Icon" className="bookIcon" />
              <input
                type="text"
                name="inputArticleSearch"
                id="inputArticleSearch"
                className="heroArticleSearch"
                placeholder="Search for blogs"
                required
                ref={inputArticleSearch}
              />
            </div>
            <button
              className="articleSearchInputSubmit"
              onClick={submitSearchForm}
            >
              Search
            </button>
          </form>
          <div class="searchFilters">
            <ul className="filterList filterListPrimary">
              <div className="filterRow1">
                <li
                  className="filterButton activeFilter"
                  onClick={toggleFilter}
                >
                  All
                </li>
                <li className="filterButton" onClick={toggleFilter}>
                  General
                </li>
                <li className="filterButton" onClick={toggleFilter}>
                  Job Search
                </li>
                <li className="filterButton" onClick={toggleFilter}>
                  Recreation
                </li>
                <li className="filterButton" onClick={toggleFilter}>
                  Mental Health
                </li>
              </div>
              <div className="filterRow2">
                <li className="filterButton" onClick={toggleFilter}>
                  Finance
                </li>
                <li className="filterButton" onClick={toggleFilter}>
                  Academics
                </li>
                <li className="filterButton" onClick={toggleFilter}>
                  Essentials
                </li>
                <li className="filterButton" onClick={toggleFilter}>
                  Future Plans
                </li>
                <li className="filterButton" onClick={toggleFilter}>
                  Advice
                </li>
              </div>
            </ul>
            <ul className="filterList filterListSecondary">
              <li className="filterButton activeFilter" onClick={toggleFilter}>
                All
              </li>
              <li className="filterButton" onClick={toggleFilter}>
                General
              </li>
              <li className="filterButton" onClick={toggleFilter}>
                Job Search
              </li>
              <li className="filterButton" onClick={toggleFilter}>
                Recreation
              </li>
              <li className="filterButton" onClick={toggleFilter}>
                Mental Health
              </li>
              <li className="filterButton" onClick={toggleFilter}>
                Finance
              </li>
              <li className="filterButton" onClick={toggleFilter}>
                Academics
              </li>
              <li className="filterButton" onClick={toggleFilter}>
                Essentials
              </li>
              <li className="filterButton" onClick={toggleFilter}>
                Future Plans
              </li>
              <li className="filterButton" onClick={toggleFilter}>
                Advice
              </li>
            </ul>
          </div>
        </div>
        <div className="heroAddArticle">
          <Link to="/admin/add-article" className="addArticleButton">
            <i className="fas fa-plus plusIcon"></i>
            <p className="plusText">Add Article</p>
          </Link>
        </div>
      </div>
      <div class="adminSearchContainer">
        {noArticles ? (
          <div className="articleNotFoundContainer">
            <p className="articleNotFound">No articles found!</p>
          </div>
        ) : (
          articles.map((article) => {
            return (
              <DashboardArticleCard
                title={article.title}
                coverImage={article.coverImage}
                tags={article.tags}
                description={article.description}
                id={article._id}
              />
              // <div>
              //   <p>Title: {article.title}</p>
              //   <p>Id: {article._id}</p>
              //   <p onClick={() => deleteArticle(article._id)}>Delete Article</p>
              // </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
