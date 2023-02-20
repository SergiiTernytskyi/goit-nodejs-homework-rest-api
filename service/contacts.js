const { Contact } = require("../models");

const getAllContacts = async () => {
    return Contact.find();
};

const getContactsById = async (id) => {
    return Contact.findById(id);
};

const addContact = async (body) => {
    return Contact.create(body);
};

const updateContactById = async (id, update) => {
    return Contact.findByIdAndUpdate({ _id: id }, update, { new: true });
};

const removeContactById = async (id) => {
    return Contact.findByIdAndDelete(id);
};

module.exports = {
    getAllContacts,
    getContactsById,
    addContact,
    updateContactById,
    removeContactById,
};
