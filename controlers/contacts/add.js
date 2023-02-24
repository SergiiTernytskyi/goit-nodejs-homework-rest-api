const {
    contacts: { addContact },
} = require("../../service");

const add = async (req, res) => {
    const { body } = req;

    const result = await addContact(body);

    res.status(201).json({
        status: 201,
        message: "success",
        data: { contact: result },
    });
};

module.exports = add;
