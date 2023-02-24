const {
    contacts: { addContact },
} = require("../../service");

const add = async (req, res) => {
    const { _id: userId } = req.user;
    const { body } = req;
    console.log(body);

    const result = await addContact(body, userId);

    res.status(201).json({
        status: 201,
        message: "success",
        data: { contact: result },
    });
};

module.exports = add;
