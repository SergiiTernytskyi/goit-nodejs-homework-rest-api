const {
    users: { updateUsersToken },
} = require("../../service");

const logout = async (req, res) => {
    const { _id: userId } = req.user;
    await updateUsersToken(userId);
    res.status(204).json();
};

module.exports = logout;
