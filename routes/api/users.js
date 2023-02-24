const express = require("express");

const { users: usersCtrl } = require("../../controlers");
const { validation } = require("../../midlewares");
const { joiRegisterSchema } = require("../../helpers/joiSchemas");

const router = express.Router();

router.post("/register", validation(joiRegisterSchema), usersCtrl.register);
router.post("/login", validation(joiRegisterSchema), usersCtrl.login);

module.exports = router;
