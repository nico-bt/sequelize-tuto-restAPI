const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('projectsdb', 'postgres', 'postgres4982',{
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = sequelize