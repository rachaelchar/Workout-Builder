const router = require("express").Router();
const db = require("../../models");


router.get("/exercises", (req, res) => {
  db.exercise.findAll().then((exercises) => {
    res.json(exercises);
  })
});

router.post("/exercises", (req, res) => {
  const newExercise = req.body;
  db.exercise.create(newExercise)
});

module.exports = router;