const express     = require('express');
const port        = process.env.PORT || 5000;
const bodyParser  = require('body-parser');
const app         = express();
const mongoose    = require('mongoose');


//app Config
app.use(express.static("public"));
app.set("view engine", "ejs");

//initial landing page Routes
app.get("/", (req, res) => {
  res.render("landingPage");
});

//route for users personal calcs
app.get("/:user/calc", (req, res) => {
  res.render("myCalcs");
});

//Route for calculator form
app.get("/calc", (req, res) => {
    res.render("calcForm");
});

//Show route
app.get("/calc/:id", (req, res) => {
    res.render("calcShow");
});

//Route for POSTing calculator info




//Setting Listening Port
app.listen(port, () => {
  console.log("App Has Started Serving Routes");
});
