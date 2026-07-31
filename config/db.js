const { Sequelize } = require("sequelize");

// create database Nodejslearning ;
const sequelize = new Sequelize("Nodejslearning", "root", "Root@1234", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

module.exports = sequelize;
