const { NotFound, BadRequest } = require("http-errors");

const {
    contacts: { updateContactById },
} = require("../../service");

const updateStatusContact = async (req, res) => {
    const { contactId } = req.params;
    const { favorite } = req.body;

    if (!favorite) {
        throw BadRequest("Favorite field is required");
    }

    const result = await updateContactById(contactId, { favorite });

    if (!result) {
        throw NotFound("Not found");
    }

    res.status(200).json({
        status: 200,
        message: "contact favorite status updated",
        data: { contact: result },
    });
};

module.exports = updateStatusContact;
