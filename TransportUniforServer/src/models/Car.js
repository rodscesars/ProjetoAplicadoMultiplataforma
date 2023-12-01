const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  number: {
    type: String,
    default: "", 
  }
});

mongoose.model("Car", carSchema);
