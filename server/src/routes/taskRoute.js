const Router = require("express")
const {getTasks, createTask, getTaskById, deleteTask, updateTask, updateStatus} = require("../controllers/taskController")
const apiKey = require("../middleware/apiKey")
const app = Router()

app.get("/api/tasks", apiKey, getTasks)
app.get("/api/tasks/:id", getTaskById)
app.post("/api/tasks", createTask)
app.put("/api/tasks/:id", updateTask)
app.patch("/api/tasks/:id/status", updateStatus)
app.delete("/api/tasks/:id", deleteTask)


module.exports = app