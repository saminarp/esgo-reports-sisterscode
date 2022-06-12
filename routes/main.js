const express = require("express");
const router = express.Router();
/* 
//home
router.get("/", (req, res) => {
  res.render("home", {
    layout: "main",
    title: " Home | Simit The Sustain",
  });
});

router.get("/stories", (req, res) => {
  res.render("stories", {
    layout: "main",
    title: "Success Stories | Simit The Sustain",
  });
});

router.get("/producers", (req, res) => {
  res.render("producers", {
    layout: "main",
    title: "Producers | Simit The Sustain",
  });
});

router.get("/suppliers", (req, res) => {
  res.render("suppliers", {
    layout: "main",
    title: "Suppliers | Simit The Sustain",
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    layout: "main",
    title: "About Us | Simit The Sustain",
  });
});

router.get("/our-vision", (req, res) => {
  res.render("our-vision", {
    layout: "main",
    title: "Our Vision | Simit The Sustain",
  });
}); */
router.get("/", (req, res) => {
  res.render("home", {
    layout: "main",
    title: " Home",
  });
});
module.exports = router;
