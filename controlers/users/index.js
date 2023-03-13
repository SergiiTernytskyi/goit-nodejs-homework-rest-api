const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const getCurrent = require("./getCurrent");
const updateSubscription = require("./updateSubscription");
const updateAvatar = require("./updateAvatar");
const verificateEmail = require("./verificateEmail");
const resendEmail = require("./resendEmail");

const { ctrlWrapper } = require("../../helpers");

module.exports = {
    register: ctrlWrapper(register),
    login: ctrlWrapper(login),
    logout: ctrlWrapper(logout),
    getCurrent: ctrlWrapper(getCurrent),
    updateSubscription: ctrlWrapper(updateSubscription),
    updateAvatar: ctrlWrapper(updateAvatar),
    verificateEmail: ctrlWrapper(verificateEmail),
    resendEmail: ctrlWrapper(resendEmail),
};
