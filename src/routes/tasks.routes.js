const {Router} = require("express")
const {getAllTasks, createTask, deleteTask, updateTask, getTask} = require("../controllers/tasks.controller")

const router = Router()

router.get("/tasks", getAllTasks)
router.post("/tasks", createTask)
router.put("/tasks/:id", updateTask)
router.delete("/tasks/:id", deleteTask)
router.get("/tasks/:id", getTask)

module.exports = router