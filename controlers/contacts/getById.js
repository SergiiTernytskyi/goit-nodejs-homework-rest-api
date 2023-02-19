const createError = require("http-errors");
const { getContactsById } = require("../../service");

const getById = async (req, res) => {
    const { contactId } = req.params;
    const result = await getContactsById(contactId);

    if (!result) {
        throw createError(404, "Not found");
    }

    res.status(200).json({
        message: "success",
        data: { contact: result },
    });
};

module.exports = getById;
