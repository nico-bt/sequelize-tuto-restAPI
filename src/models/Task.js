// Conexión/vínculo a la base de datos creada. "sequelize" es instancia de "Sequelize"
const sequelize = require("../database/database")
const {DataTypes} = require("sequelize")

const Task = sequelize.define('Task', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    done:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    timestamps: false
});

module.exports = Task