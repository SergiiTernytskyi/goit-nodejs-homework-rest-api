const { getAllContacts } = require("../../service");

const getAll = async (req, res) => {
    const result = await getAllContacts();

    res.status(200).json({
        message: "success",
        data: { contacts: result },
    });
};

module.exports = getAll;
