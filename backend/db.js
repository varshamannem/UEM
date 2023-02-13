const mongoose = require("mongoose");
const CONNECTION_URL =
  "mongodb+srv://varsha_mannem:varsha14@cluster0.dusgym3.mongodb.net/?retryWrites=true&w=majority";
const db = () => {
  mongoose.connect(CONNECTION_URL, () => {
    console.log("mongo/atlas connnected");
  });
};
module.exports = db;