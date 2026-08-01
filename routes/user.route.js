const express = require("express");
const {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

const router = express.Router();

// app.get("/api/v1/users", getUsers);
// app.post("/api/v1/users", createUser);
// app.get("/api/v1/users/:id", getUser);
// app.patch("/api/v1/users/:id", updateUser);
// app.delete("/api/v1/users/:id", deleteUser);

router.route("/").get(getUsers).post(createUser);

router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
