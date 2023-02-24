const { Unauthorized } = require("http-errors");
const tokenCreate = require("../../helpers/tokenCreate");

const {
    users: { getUserByEmail, updateUsersToken },
} = require("../../service");

const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await getUserByEmail(email);
    if (!user || !user.validPassword(password)) {
        throw new Unauthorized("Email or password is wrong");
    }

    const token = tokenCreate(user);

    await updateUsersToken(user._id, token);

    res.status(200).json({
        status: 200,
        message: "success",
        token,
        data: {
            user: {
                email: "example@example.com",
                subscription: "starter",
            },
        },
    });
};

module.exports = login;
