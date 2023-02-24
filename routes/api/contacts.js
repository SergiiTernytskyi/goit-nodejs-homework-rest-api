const express = require("express");

const { contacts: contactsCtrl } = require("../../controlers");
const { validation, isValidId } = require("../../midlewares");
const { joiSchema, joiStatusSchema } = require("../../helpers/joiSchemas");

const router = express.Router();

router.get("/", contactsCtrl.getAll);
router.get("/:contactId", isValidId, contactsCtrl.getById);
router.post("/", validation(joiSchema), contactsCtrl.add);
router.put(
    "/:contactId",
    isValidId,
    validation(joiSchema),
    contactsCtrl.update
);
router.delete("/:contactId", isValidId, contactsCtrl.remove);
router.patch(
    "/:contactId/favorite",
    isValidId,
    validation(joiStatusSchema),
    contactsCtrl.updateStatusContact
);

module.exports = router;
