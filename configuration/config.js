const Sequelize = require("sequelize");

// Sequelize is a popular Node.js ORM (Object-Relational Mapping) library for SQL databases.
// It provides an easy way to interact with databases by abstracting away the SQL queries and allowing you to work with JavaScript objects instead
// we use sequelize to connect to database (SQL) instead of mysql 2

// const sequelize = new Sequelize("database name", "user name", "password", {
//   host: "localhost", // type server
//   dialect: "mysql" | "postgres" | "mariadb", // type of package
// });

const sequelize = new Sequelize("sequelize_DataBase", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
