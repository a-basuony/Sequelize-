const sequelize = require("../configuration/config");

// see what is all models was created in all modules  and export them as a single module.

let createTable = () => {
  sequelize
    .sync()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => console.log(error));
};

module.exports = createTable;
