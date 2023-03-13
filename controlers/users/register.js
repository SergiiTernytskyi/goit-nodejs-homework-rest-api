const { Conflict } = require("http-errors");
const gravatar = require("gravatar");
const { v4: uuidv4 } = require("uuid");

const { User } = require("../../models");
const { sendMail } = require("../../helpers/");

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
        const verificationToken = uuidv4();
        const newUser = new User({
            email,
            avatarURL: gravatar.url(email),
            verificationToken,
        });

        newUser.setPassword(password);

        await newUser.save();

        await sendMail(email, verificationToken);

        res.status(201).json({
            status: 201,
            message: "success",
            data: {
                user: {
                    email: newUser.email,
                    avatarURL: newUser.avatarURL,
                    subscription: "starter",
                    verificationToken,
                },
            },
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = register;
