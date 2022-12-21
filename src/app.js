const express = require("express")
const app = express()

const sequelize = require("./database/database")

app.get("/", (req, res)=>{
    res.send("Home page")
})

app.listen(3000, async ()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        console.log("Running on port 3000");
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})