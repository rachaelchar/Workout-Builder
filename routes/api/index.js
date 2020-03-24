const router = require("express").Router();
const db = require("../../models");


router.get("/exercises", (req, res) => {
  db.exercise.findAll().then((exercises) => {
    res.json(exercises);
  })
});

module.exports = router;