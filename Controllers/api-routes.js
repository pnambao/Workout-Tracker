const db = require("../Models");
const router = require("express").Router();


// get workouts
router.get("/", async (req, res) => {
    let result = await db.find({});
    console.log(result);
    res.send(result);
  });

//add exercise
router.put("/:id", async (req, res) => {
    let workout = await db.findOne({
      _id: req.params.id,
    });
    workout.exercises.push(req.body);
    let result = await db.save();
    console.log(result);
    res.send(result);
  });

//create exercise
router.post("/", async (req, res) => {
    let result = await db.create(req.body);
    console.log(result);
    res.send(result);
  });

//get range
router.get("/range", async (req, res) => {
    let result = await db.find({}).sort({ day: -1 }).limit(7);
    console.log(result);
    res.send(result);
  });
  
  module.exports = router;
