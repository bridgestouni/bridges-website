import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";

import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import OfficeHours from "./Pages/OfficeHours";
import Blog from "./Pages/Blog";
import Resources from "./Pages/Resources";
import ContactUs from "./Pages/ContactUs";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import AdminDashboard from "./Pages/AdminDashboard";
import AddArticle from "./Pages/AddArticle";
import EditArticle from "./Pages/EditArticle";
import ViewArticle from "./Pages/ViewArticle";
import PageUnderConstruction from "./Pages/PageUnderConstruction";


import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutUs} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/office-hours" component={OfficeHours} />
          <Route path="/resources" component={PageUnderConstruction} />
          <Route path="/mentorship" component={PageUnderConstruction} />
          <Route exact path="/blog" component={Blog} />
          <Route path="/blog/:id" component={ViewArticle} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route exact path="/admin" component={AdminDashboard} />
          <Route path="/admin/add-article" component={AddArticle} />
          <Route path="/admin/edit-article/:id" component={EditArticle} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
