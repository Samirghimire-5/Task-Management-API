const dotenv = require("dotenv"); 
const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    const response = mongoose.connect(process.env.MONGO_URI, {
      dbName: "TaskApi"
    }); // yo task ma data xina data halnu parx 
    if (response) {
      console.log("Connection Successful")
    }
  } catch (Error) {
    console.log("Error", Error)
  }
}

module.exports = dbConnection;