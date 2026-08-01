const User = require("../models/user.model");

exports.getUsers = async (req, res) => {
  const users = await User.findAll();
  res.status(200).json({
    status: "success",
    users,
  });
};

exports.createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({
    status: "success",
    user,
  });
};
exports.getUser = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.status(200).json({
    status: "success",
    user,
  });
};
exports.updateUser = async (req, res) => {
  const user = await User.update(req.body, {
    where: {
      user_id: req.params.id,
    },
  });
  res.status(200).json({
    status: "success",
    user,
  });
};

exports.deleteUser = async (req, res) => {
  await User.destroy({
    where: {
      user_id: req.params.id,
    },
  });
  res.status(204).json({
    status: "success",
  });
};
