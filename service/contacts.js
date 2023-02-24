const { Contact } = require("../models");

const getAllContacts = async (id, favorite, skip, limit) => {
    return Contact.find({ owner: id, favorite }, "", {
        skip,
        limit,
    }).populate("owner", "_id email subscription");
};

const getContactsById = async (id, userId) => {
    return Contact.findOne({ _id: id, owner: userId }).populate(
        "owner",
        "_id email subscription"
    );
};

const addContact = async (body, id) => {
    return Contact.create({ ...body, owner: id });
};

const updateContactById = async (id, update, userId) => {
    return Contact.findOneAndUpdate({ _id: id, owner: userId }, update, {
        new: true,
    }).populate("owner", "_id email subscription");
};

const removeContactById = async (id, userId) => {
    return Contact.findOneAndRemove({ _id: id, owner: userId });
};

module.exports = {
    getAllContacts,
    getContactsById,
    addContact,
    updateContactById,
    removeContactById,
};
