const { NotFound } = require("http-errors");

const {
    contacts: { removeContactById },
} = require("../../service");

const remove = async (req, res) => {
    const { contactId } = req.params;
    const { _id: userId } = req.user;

    const result = await removeContactById(contactId, userId);

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
