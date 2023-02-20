const { NotFound } = require("http-errors");

const { getAllContacts } = require("../../service");

const getAll = async (req, res) => {
    const result = await getAllContacts();

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
