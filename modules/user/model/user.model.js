const Sequelize = require("sequelize"); // to get types  of fields

const sequelize = require("../../../configuration/config"); // from connection to define

//  Define the model schema or table name => user with its fields or columns (id,name,email,password)
const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  /// === it will add this fields automatic by default
  // "createdAt": "2024-02-24T02:03:11.000Z",
  // updatedAt: "2024-02-24T02:03:11.000Z",
});

module.exports = User;
