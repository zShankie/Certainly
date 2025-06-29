var express = require("express");
var router = express.Router();
const Applicants = require("../models/applicants");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/applicant", async (req, res) => {
  try {
    const Applicant = await Applicants.find();
    res.json(Applicant);
  } catch (err) {
    res.status(404).json("Error: Applicant Not found ");
  }
});

router.post("/applicant", async (req, res) => {
  try {
    const Applicant = await Applicants.create(req.body);
    console.log(Applicant);
    res.end();
  } catch (err) {
    res.status(404).json("Error: Applicant Not added ");
  }
});

module.exports = router;
