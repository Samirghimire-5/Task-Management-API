const Router = require("express")
const {getTasks, createTask} = require("../controllers/taskController")
const app = Router()

app.get("/api/tasks", getTasks)
app.post("/api/task", createTask)

module.exports = app