const express = require("express");

const { contacts: contactsCtrl } = require("../../controlers");
const { validation, isValidId, auth } = require("../../midlewares");
const { joiSchema, joiStatusSchema } = require("../../helpers/joiSchemas");

const router = express.Router();

router.get("/", auth, contactsCtrl.getAll);
router.get("/:contactId", auth, isValidId, contactsCtrl.getById);
router.post("/", auth, validation(joiSchema), contactsCtrl.add);
router.put(
    "/:contactId",
    auth,
    isValidId,
    validation(joiSchema),
    contactsCtrl.update
);
router.delete("/:contactId", auth, isValidId, contactsCtrl.remove);
router.patch(
    "/:contactId/favorite",
    auth,
    isValidId,
    validation(joiStatusSchema),
    contactsCtrl.updateStatusContact
);

module.exports = router;
