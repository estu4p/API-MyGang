const router = require("express").Router();
const userController = require("./user.controller");

router.post("/", userController.createUser);
router.put("/:id", userController.editUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
