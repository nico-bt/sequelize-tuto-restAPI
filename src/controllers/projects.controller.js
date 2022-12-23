const Project = require("../models/Project")
const Task = require("../models/Task")


const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.findAll()
        res.json(projects)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: error.message})
    }
}

const createProject = async (req, res) => {
    const {name, priority, description} = req.body
    
    if(!name || !priority || !description) {
        return res.status(400).json("Please enter all fields (name, priority, description)")
    }

    try {
        const newProject = await Project.create({name, priority, description})
        res.status(201).json(newProject)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: error.message})
    }
}

const deleteProject = async (req, res) => {
    try {
        await Project.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({message: "Project Deleted"})
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error.message})
    }
}

const updateProject = async (req, res) => {
    const id = req.params.id
    const {name, priority, description} = req.body
    
    if(!name || !priority || !description) {
        return res.status(400).json("Please enter all fields (name, priority, description)")
    }

    try {
        const project = await Project.findByPk(id)
        project.name = name
        project.priority = priority
        project.description = description
        await project.save()

        res.json(project)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: error.message})
    }
}

const getProject = async (req, res) => {
    const id = req.params.id
    try {
        const project = await Project.findByPk(id)
        if(project){
            return res.json(project)
        } else {
            return res.status(404).json({message: "Check the id, project not found"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({error: error.message})
    }
}

// All the tasks that belong to a specific project
const getProjectTasks = async (req, res) => {
    const id = req.params.id
    try {
        const projectTasks = await Task.findAll({
            where: { projectId: id }
        })
        res.json(projectTasks)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}


module.exports = {getAllProjects, createProject, deleteProject, updateProject, getProject, getProjectTasks}