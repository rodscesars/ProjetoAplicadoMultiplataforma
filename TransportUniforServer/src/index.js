const dotenv = require('dotenv');
dotenv.config();
require("./models/User"); //não precisa atribuir uma const, só vai ser chamada uma vez
require("./models/Car");
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const carRoutes = require("./routes/carRoutes");
const requireAuth = require("./middlewares/requireAuth");

const app = express();

//A ORDEM É IMPORTANTE//
app.use(bodyparser.json());
app.use(authRoutes);
app.use(carRoutes);

const mongoURI = process.env.DATABASE
const PORT = process.env.PORT

  if (!mongoURI) {
    throw new Error(
      `MongoURI was not supplied.  Make sure you watch the video on setting up Mongo DB!`
    );
  }

mongoose.set("strictQuery", true);

mongoose.connect(mongoURI);

mongoose.connection.on("connected", () => {
  console.log("connected to mongo instance!");
});

mongoose.connection.on("error", (err) => {
  console.error("error connecting to mongo", err);
}); 

app.get("/", requireAuth, (req, res) => {
  res.send(`Your email is: ${req.user.email}`);
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
