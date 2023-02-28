const { BadRequest, NotFound } = require("http-errors");

const {
    contacts: { getAllContacts },
} = require("../../service");

const getAll = async (req, res) => {
    const { _id: userId } = req.user;
    const { page = 1, limit = 20, favorite = false } = req.query;

    if (!favorite || !limit || !page) {
        throw new BadRequest("Bad request");
    }

    const contactsSkip = (page - 1) * limit;
    const contactsLimit = Number(limit);
    const result = await getAllContacts(
        userId,
        favorite,
        contactsSkip,
        contactsLimit
    );

    if (!result) {
        throw NotFound("Not found");
    }

    res.status(200).json({
        status: 200,
        message: "success",
        data: { contacts: result },
    });
};

module.exports = getAll;
