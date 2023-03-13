const { User } = require("../models");

const getUserByEmail = async (value) => {
    return await User.findOne({ email: value });
};

const updateUsersToken = async (id, value = null) => {
    return await User.findByIdAndUpdate({ _id: id }, { token: value });
};

const getUserById = async (id) => {
    return User.findById(id);
};

const updateUserById = async (id, update) => {
    return User.findByIdAndUpdate(id, update, {
        new: true,
    });
};

const getUserByVerificationToken = async (verificationToken) => {
    return User.findOne({ verificationToken });
};

const updateUserByEmail = async (value, update) => {
    return await User.findOneAndUpdate({ email: value }, update);
};

module.exports = {
    getUserByEmail,
    updateUsersToken,
    getUserById,
    updateUserById,
    getUserByVerificationToken,
    updateUserByEmail,
};
