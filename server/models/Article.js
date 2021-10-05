// models/Articles.js

const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    // required: true,
    default: "",
  },
  topic: {
    type: String,
    // required: true,
    default: "",
  },
  tags: {
    type: String,
    // required: true,
    default: "",
  },
  type: {
    type: String,
    // required: true,
    default: "",
  },
  author: {
    type: String,
    // required: true,
    default: "",
  },
  description: {
    type: String,
    // required: true,
  },
  published_date: {
    type: String,
    // required: true,
  },
  coverImage: {
    type: String,
    // required: true,
    default: "",
  },
  body: {
    type: Array,
    default: [],
  },
  bodyType: {
    type: Array,
    default: [],
  },
  bodyImages: {
    type: Array,
    default: [],
  },
});

module.exports = Article = mongoose.model("article", ArticleSchema);
