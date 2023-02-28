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
    return User.findByIdAndUpdate(
        id,
        { subscription: update },
        {
            new: true,
        }
    );
};

module.exports = {
    getUserByEmail,
    updateUsersToken,
    getUserById,
    updateUserById,
};
