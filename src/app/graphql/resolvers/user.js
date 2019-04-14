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

module.exports.createUser = async (_, args) => {
  const { input } = args;
  const user = await User.create(input);
  return user.toObject();
};

module.exports.updateUser = async (_, args) => {
  const { id, input } = args;
  const user = await User.findByIdAndUpdate(id, input);
  return user ? user.toObject() : null;
};

module.exports.deleteUser = async (_, args) => {
  const { id } = args;
  const user = await User.findByIdAndRemove(id);
  return user.toObject();
};
