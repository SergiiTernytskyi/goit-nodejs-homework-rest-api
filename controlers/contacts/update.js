const { NotFound } = require("http-errors");

const {
    contacts: { updateContactById },
} = require("../../service");

const update = async (req, res) => {
    const { contactId } = req.params;

    const result = await updateContactById(contactId, req.body);

    if (!result) {
        throw NotFound("Not found");
    }

    res.status(200).json({
        status: 200,
        message: "contact updated",
        data: { contact: result },
    });
};

module.exports = update;
