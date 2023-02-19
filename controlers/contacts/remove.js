const createError = require("http-errors");

const { removeContactById } = require("../../service");

const remove = async (req, res) => {
    const { contactId } = req.params;

    const result = await removeContactById(contactId);

    if (!result) {
        throw createError(404, "Not found");
    }

    res.status(200).json({
        message: "contact deleted",
        data: { contact: result },
    });
};

module.exports = remove;
