const mongoose = require("mongoose");
const express = require("express");
const requireAuth = require("../middlewares/requireAuth");
const Car = mongoose.model("Car");

const router = express.Router();

router.use(requireAuth);

router.get("/cars", async (req, res) => {
  const cars = await Car.find({ userId: req.user._id });
  res.send(cars);
});

router.post("/cars", async (req, res) => {
  const { number } = req.body;
  if (!number) {
    return res
      .status(422)
      .send({ error: "You must provide a number" });
  }

  try {
    const car = new Car({ number, userId: req.user._id });
    await car.save();
    res.send(car);
  } catch (err) {
    return res.status(422).send({ error: err.message });
  }
});

module.exports = router;
