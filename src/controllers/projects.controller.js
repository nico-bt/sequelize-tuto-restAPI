const Project = require("../models/Project")


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
        return res.status(500).json("Please enter all fields (name, priority, description)")
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
        res.send(`DELETE project with id: ${req.params.id}`)
    } catch (error) {
        console.error(error)
    }
}

const updateProject = async (req, res) => {
    res.send(`UPDATE project with id: ${req.params.id}`)
}

const getProject = async (req, res) => {
    res.send(`GET project with id: ${req.params.id}`)
}


module.exports = {getAllProjects, createProject, deleteProject, updateProject, getProject}