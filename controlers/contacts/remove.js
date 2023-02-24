const { NotFound } = require("http-errors");

const {
    contacts: { removeContactById },
} = require("../../service");

const remove = async (req, res) => {
    const { contactId } = req.params;

    const result = await removeContactById(contactId);

    if (!result) {
        throw NotFound("Not found");
    }

    res.status(200).json({
        status: 200,
        message: "contact deleted",
        data: { contact: result },
    });
};

module.exports = remove;
