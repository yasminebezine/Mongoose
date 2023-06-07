const mongoose = require("mongoose");
const connectDB = () => {
  mongoose
    .connect(
      "mongodb+srv://yasmine:yasmine@cluster0.warxhhj.mongodb.net/"
    )
    .then(() => console.log("connection to the database is successful..."))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
