const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
    //   required: true,
    },
    email: {
      type: String,
    //   required: true,
      unique : true
    },
    number: {
      type: Number,
    //   required: true,
      unique : true
    },
    body: {
        type: String,
        // required: true,
      },
  },
  { timestamps: true }
);

const feedback = mongoose.model("feedback", feedbackSchema);

module.exports = feedback;
