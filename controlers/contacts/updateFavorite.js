const createError = require("http-errors");

const { updateContactById } = require("../../service");

const updateStatusContact = async (req, res) => {
    const { contactId } = req.params;
    const { favorite } = req.body;

    const result = await updateContactById(contactId, { favorite });

    if (!result) {
        throw createError(404, "Not found");
    }

    res.status(200).json({
        message: "contact favorite status updated",
        data: { contact: result },
    });
};

module.exports = updateStatusContact;
