const express = require("express");
const app = express();
var cors = require("cors");
const passport = require("passport");
const userRoutes = require("./routes/api/users");
const articleRoutes = require("./routes/api/articles");
//const bodyParser = require("body-parser");

// app.use("/uploads", express.static('uploads')); // use uploads folder to save images

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

const port = process.env.PORT || 5830;

// Connect Database
const connectDB = require("./config/db");
connectDB();

// passport middleware
app.use(passport.initialize());

// passport config
require("./config/passport")(passport);

// cors
app.use(cors({ origin: true, credentials: true }));

app.get("/", (req, res) => res.send("Hello World!"));

app.use("/api/users", userRoutes);

app.use("/api/articles", articleRoutes);

app.get("/newsletter-subscribe", (req, res) => res.send("New subscriber!"));

app.post("/newsletter-subscribe", (req, res) => {
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "bridgestouniversity@gmail.com",
    from: "avipatel.dev@gmail.com",
    subject: "New Newsletter Subscription!",
    text: `Someone would like to join the bridges weekly newsletter community. Email: ${req.body.inputEmail}`,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email Sent");
    })
    .catch((err) => {
      console.log(err);
    });
});

//app.listen(port, () => console.log(`Server running on port ${port}`));

app.listen(process.env.PORT || 5830, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
