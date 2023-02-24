const { NotFound } = require("http-errors");

const {
    contacts: { getContactsById },
} = require("../../service");

const getById = async (req, res) => {
    const { contactId } = req.params;
    const result = await getContactsById(contactId);

    if (!result) {
        throw NotFound("Not found");
    }

    res.status(200).json({
        status: 200,
        message: "success",
        data: { contact: result },
    });
};

module.exports = getById;
