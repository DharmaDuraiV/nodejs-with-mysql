const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize({ dialect: "mysql" });

const User = sequelize.define("users", {
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
  },
  salary: {
    type: DataTypes.NUMBER,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
});

module.exports = User;
