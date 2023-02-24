const { User } = require("../models");

const getUserByEmail = async (value) => {
    return await User.findOne({ email: value });
};

const updateUsersToken = async (id, value) => {
    return await User.findByIdAndUpdate({ _id: id }, { token: value });
};

module.exports = { getUserByEmail, updateUsersToken };
