// routes/api/articles.js

const express = require("express");

const router = express.Router();

// Load Article Model
const Article = require("../../models/Article");

const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
let path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "../bridges-client/src/uploads/images");
  },
  filename: (req, file, callback) => {
    callback(
      null,
      uuidv4() + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const fileFilter = (req, file, callback) => {
  const allowedFileTypes = ["images/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

const upload = multer({ storage: storage });

// @route GET api/articles/test
// @description tests articles route
// @access Public
router.get("/test", (req, res) => res.send("Article route testing!"));

// @route GET api/articles
// @description get all articles
// @access public
router.get("/", (req, res) => {
  Article.find()
    .sort({ published_date: -1 })
    .then((articles) => res.json(articles))
    .catch((err) =>
      res.status(404).json({ noarticlesfound: "No Articles found" })
    );
});

// @route GET api/articles/:id
// @description get single article by id
// @access public
router.get("/:id", (req, res) => {
  Article.findById(req.params.id)
    .then((article) => res.json(article))
    .catch((err) =>
      res.status(404).json({ noarticlefound: "No Article found" })
    );
});

// @route GET api/articles
// @description add/save article
// @access public
router.post("/", upload.single("coverImage"), (req, res) => {
  console.log("Saving article..");
  console.log("Request body title:" + req.body.title);
  console.log("Request body cover:" + req.file.filename);

  Article.create({
    title: req.body.title,
    topic: req.body.topic,
    tags: req.body.tags,
    type: req.body.type,
    author: req.body.author,
    description: req.body.description,
    published_date: req.body.published_date,
    coverImage: req.file.filename,
    body: req.body.body,
    bodyType: req.body.bodyType,
    // bodyImages: req.body.bodyImages,
  })
    .then((article) => res.json({ msg: "Article added successfully" }))
    .catch((err) =>
      res.status(404).json({
        error: "Unable to add this article",
        errorMessage: err,
      })
    );
});

// @route POST api/articles/:id
// @description update book
// @access public
router.post("/edit-article/:id", upload.single("coverImage"), (req, res) => {
  console.log("Updating article..");
  // console.log("Request Body: " + req.body);
  console.log("ID: " + req.params.id);
  console.log("Title: " + req.body.title);
  // console.log("CoverImage: " + req.file.filename);
  Article.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    topic: req.body.topic,
    tags: req.body.tags,
    type: req.body.type,
    author: req.body.author,
    description: req.body.description,
    published_date: req.body.published_date,
    body: req.body.body,
    bodyType: req.body.bodyType,
  })
    .then((article) => {
      console.log(article);
      res.json({ msg: "Updated successfully" });
    })
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

// @route GET api/articles/:id
// @description Delete article by id
// @access Public
router.delete("/:id", (req, res) => {
  Article.findByIdAndRemove(req.params.id, req.body)
    .then((article) => res.json({ msg: "Article entry deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such article" }));
});

module.exports = router;
