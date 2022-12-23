const Task = require("../models/Task")


const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll()
        res.json(tasks)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
} 

const createTask = async (req, res) => {
    const {name, projectId} = req.body
    try {
        const newTask = await Task.create({name, projectId})
        res.status(201).json(newTask)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
} 

const deleteTask = async (req, res) => {
    const id = req.params.id
    try {
        const taskToDelete = await Task.findByPk(id)
        if(taskToDelete) {
            await taskToDelete.destroy()
            return res.json(taskToDelete)
        } else {
            return res.status(404).json({message: "No Task with such id"})
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
} 

const updateTask = async (req, res) => {
    const id = req.params.id
    try {
        const task = await Task.findByPk(id)
        task.set(req.body)
        await task.save() 
        res.json(task)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
} 

const getTask = async (req, res) => {
    const id = req.params.id
    try {
        const task = await Task.findByPk(id)
        res.json(task)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
} 


module.exports ={
    getAllTasks, 
    deleteTask, 
    updateTask, 
    createTask, 
    getTask
}