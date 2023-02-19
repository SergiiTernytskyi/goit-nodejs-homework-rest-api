const express = require("express");

const { contacts: contactsCtrl } = require("../../controlers");
const { contactsValidation } = require("../../midlewares");
const { joiSchema, joiStatusSchema } = require("../../helpers/joiSchemas");

const router = express.Router();

router.get("/", contactsCtrl.getAll);
router.get("/:contactId", contactsCtrl.getById);
router.post("/", contactsValidation(joiSchema), contactsCtrl.add);
router.put("/:contactId", contactsValidation(joiSchema), contactsCtrl.update);
router.delete("/:contactId", contactsCtrl.remove);
router.patch(
    "/:contactId/favorite",
    contactsValidation(joiStatusSchema),
    contactsCtrl.updateStatusContact
);

module.exports = router;
