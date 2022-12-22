const express = require("express")
const app = express()

const sequelize = require("./database/database")

// Models 
const Project = require("./models/Project")
const Task = require("./models/Task")

// Middleware
app.use(express.json())

// Routes
app.use(require("./routes/projects.routes"))
app.use(require("./routes/tasks.routes"))

app.get("/", (req, res)=>{
    res.send("Home page")
})

app.listen(3000, async ()=>{
    try {
        // await sequelize.authenticate(); // Testea la conexión nomás
        await sequelize.sync(); // Crea tabla si doesn't exist (and does nothing if it already exists, con "{force:true}" borra y crea nuevas)
        console.log('Connection has been established successfully.');
        console.log("Running on port 3000");
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})