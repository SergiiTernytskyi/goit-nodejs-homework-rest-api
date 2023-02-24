const express = require("express");

const { users: usersCtrl } = require("../../controlers");
const { auth, validation } = require("../../midlewares");
const {
    joiRegisterSchema,
    joiSubscriptionSchema,
} = require("../../helpers/joiSchemas");

const router = express.Router();

router.post("/register", validation(joiRegisterSchema), usersCtrl.register);
router.post("/login", validation(joiRegisterSchema), usersCtrl.login);
router.post("/logout", auth, usersCtrl.logout);
router.get("/current", auth, usersCtrl.getCurrent);
router.patch(
    "/",
    auth,
    validation(joiSubscriptionSchema),
    usersCtrl.updateSubscription
);

module.exports = router;
