const { addContact } = require("../../service");

const add = async (req, res) => {
    const { body } = req;

    const result = await addContact(body);

    res.status(201).json({
        message: "success",
        data: { contact: result },
    });
};

module.exports = add;
