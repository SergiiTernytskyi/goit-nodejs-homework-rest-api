const express = require("express");

const { contacts: contactsCtrl } = require("../../controlers");
const { contactsValidation, isValidId } = require("../../midlewares");
const { joiSchema, joiStatusSchema } = require("../../helpers/joiSchemas");

const router = express.Router();

router.get("/", contactsCtrl.getAll);
router.get("/:contactId", isValidId, contactsCtrl.getById);
router.post("/", contactsValidation(joiSchema), contactsCtrl.add);
router.put(
    "/:contactId",
    isValidId,
    contactsValidation(joiSchema),
    contactsCtrl.update
);
router.delete("/:contactId", isValidId, contactsCtrl.remove);
router.patch(
    "/:contactId/favorite",
    isValidId,
    contactsValidation(joiStatusSchema),
    contactsCtrl.updateStatusContact
);

module.exports = router;
