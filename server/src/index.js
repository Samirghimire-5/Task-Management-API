const express = require("express")
require("dotenv").config()
// const cors = require("cors")
const dbConnection = require("./database/connections")

const app = express();
// app.use(cors)

app.use(express.json());

// routes
const taskRoute = require("./routes/taskRoute")

app.use(taskRoute)

dbConnection();

app.listen(process.env.PORT, () => console.log(`Server listining at ${process.env.PORT}`))