const service = require("./user.service");

exports.create = async (req, res) => {
  const user = await service.createUser(req.body);
  res.json(user);
};

exports.edit = async (req, res) => {
  const user = await service.editUser(req.params.id, req.body);
  res.json(user);
};

exports.remove = async (req, res) => {
  const user = await service.deleteUser(req.params.id);
  res.json(user);
};
