const express = require("express");
const router = express.Router();
const {
  getSingleUser,
  getUsers,
  deleteUser,
  createUser
} = require("./controller");

router.get("/:id", getSingleUser);
router.get("/", getUsers);
router.delete("/:id", deleteUser);
router.post("/", createUser);

module.exports = router;
