const {Router} = require("express")
const {getAllProjects, createProject, deleteProject, updateProject, getProject} = require("../controllers/projects.controller")

const router = Router()

router.get("/projects", getAllProjects)
router.post("/projects", createProject)
router.put("/projects/:id", updateProject)
router.delete("/projects/:id", deleteProject)
router.get("/projects/:id", getProject)

module.exports = router