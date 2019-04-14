const User = require("../../users/model");

module.exports.getUsers = async () => {
  const users = await User.find();
  return users.map(user => user.toObject());
};

module.exports.getUser = async (_, args) => {
  const { id } = args;
  const user = await User.findById(id);
  return user.toObject();
};
