// Conexión/vínculo a la base de datos creada. "sequelize" es instancia de "Sequelize"
const sequelize = require("../database/database")
const {DataTypes} = require("sequelize")
const Task = require("./Task")

const Project = sequelize.define('Project', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    priority:{
        type: DataTypes.INTEGER
    },
    description: {
        type: DataTypes.STRING(250)
    }
  }, {
    // Other model options go here
});

// Relación con Tasks
Project.hasMany(Task, {
    foreignKey: "projectId",
    sourceKey: "id"
})

Task.belongsTo(Project, {
    foreignKey: "projectId",
    targetKey: "id"
})

module.exports = Project