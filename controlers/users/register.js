const { Conflict } = require("http-errors");
const gravatar = require("gravatar");

const { User } = require("../../models");

const {
    users: { getUserByEmail },
} = require("../../service");

const register = async (req, res, next) => {
    const { email, password } = req.body;

    const user = await getUserByEmail(email);

    if (user) {
        throw new Conflict("Email in use");
    }

    try {
        const newUser = new User({ email, avatarURL: gravatar.url(email) });
        newUser.setPassword(password);
        await newUser.save();

        res.status(201).json({
            status: 201,
            message: "success",
            data: {
                user: {
                    email: newUser.email,
                    avatarURL: newUser.avatarURL,
                    subscription: "starter",
                },
            },
        });
    } catch (error) {
        next(error);
    }
};

module.exports = register;
