const User = require("./model");

module.exports.getSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await User.findById(id);
    res.send(data);
  } catch (e) {
    res.status(500).send();
  }
};

module.exports.getUsers = async (_, res) => {
  try {
    const data = await User.find();
    res.send(data);
  } catch (e) {
    res.status(500).send();
  }
};

module.exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await User.findByIdAndRemove(id);
    res.send(data);
  } catch (e) {
    res.status(500).send();
  }
};

module.exports.createUser = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "User cannot be empty"
    });
  }

  const { name, email, gender, weight, height, age } = req.body;

  const user = new User({
    name,
    email,
    gender,
    weight,
    height,
    age
  });

  try {
    const data = await user.save();
    res.send(data);
  } catch (e) {
    res.status(500).send({
      message: e.message
    });
  }
};
