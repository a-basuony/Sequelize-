const { where } = require("sequelize");
const User = require("../model/user.model");
// to handle search  request from user
const { Op } = require("sequelize");

const getAllUsers = async (req, res) => {
  const users = await User.findAll({});
  res.json({ message: "success", users });
};

const getSingleUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.findAll({
    where: {
      id,
    },
  });
  res.json({ message: "Success", user });
};

const addNewUser = async (req, res) => {
  const { name, email, password } = req.body;
  await User.create({ name, email, password }); // User.create({})  it will create automatic
  res.json({ message: "added success" });
};

const updateUser = async (req, res) => {
  let { id } = req.params;
  let { name } = req.body;

  await User.update(
    { name: name }, // User.update({filed: // as a key = value that i want to change }, {where:{id} //condition})    updated fields or {name}
    {
      where: {
        id,
      },
    } //condition
  );
  res.json({ message: "updated success" });
};

const deleteUser = async (req, res) => {
  let { id } = req.params;
  await User.destroy({
    where: {
      id,
    },
  });
  res.json({ message: "deleted success" });
};

//search by  keyword in users table
const searchUsersByKeyword = async (req, res) => {
  // http://localhost:5000/search?searchkey=ayat
  const { searchkey } = req.query; // without camelCase naming in query and should searckey in url equal  to searchkey in req.query
  if (!searchkey) {
    return res.status(400).json({ message: "Search key is required" });
  }
  let user; // Declare user outside of the if-else blocks
  try {
    if (searchkey) {
      user = await User.findAll({
        where: {
          name: {
            [Op.like]: `%${searchkey}%`, // if  we want to find any thing that contain this word
            // [Op.like]: `${searchkey}%`, // if we want to find thing that start with  this word
            // [Op.like]: `%${searchkey}`, // if we  want to find thing that end with this word
            // [Op.like]: `%Ahmed%`, // to search with word
          },
        },
      });
      res.json({ message: "Searched Successfully", user });
    } else {
      user = await User.findAll({});
      res.json({ message: "Searched failed", user });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" }); // Add error response
  }
};

module.exports = {
  getAllUsers,
  addNewUser,
  updateUser,
  deleteUser,
  getSingleUser,
  searchUsersByKeyword,
};
