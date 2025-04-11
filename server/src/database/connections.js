const dotenv = require("dotenv"); 
const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    const response = mongoose.connect(`${process.env.MONGO_URI}`)
    if (response) {
      console.log("Connection Successful")
    }
  } catch (Error) {
    console.log("Error", Error)
  }
}

module.exports = dbConnection;