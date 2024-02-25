const {
  getAllUsers,
  addNewUser,
  updateUser,
  deleteUser,
  getSingleUser,
  searchUsersByKeyword,
} = require("../controller/user.controller");

const router = require("express").Router();

router.get("/users", getAllUsers);
router.get("/getSingleUser/:id", getSingleUser);
router.post("/addUser", addNewUser);
router.put("/updateUser/:id", updateUser);
router.delete("/deleteUser/:id", deleteUser);
router.get("/search", searchUsersByKeyword);

module.exports = router;
