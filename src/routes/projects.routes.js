const {Router} = require("express")
const {getAllProjects, createProject, deleteProject, updateProject, getProject, getProjectTasks} = require("../controllers/projects.controller")

const router = Router()

router.get("/projects", getAllProjects)
router.post("/projects", createProject)
router.put("/projects/:id", updateProject)
router.delete("/projects/:id", deleteProject)
router.get("/projects/:id", getProject)

// All the tasks that belong to a specific project
router.get("/projects/:id/tasks", getProjectTasks)

module.exports = router