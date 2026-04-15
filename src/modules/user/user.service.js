const User = require("./user.model");

exports.createUser = (data) => User.create(data);
exports.editUser = (id, data) =>
  User.findByIdAndUpdate(id, data, { new: true });
exports.deleteUser = (id) => User.findByIdAndDelete(id);
