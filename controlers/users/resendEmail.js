const { v4: uuidv4 } = require("uuid");
const { BadRequest } = require("http-errors");

const {
    email: { sendMail },
} = require("../../service");

const {
    users: { updateUserByEmail, getUserByEmail },
} = require("../../service");

const resendEmail = async (req, res) => {
    const { email } = req.body;

    const user = await getUserByEmail(email);

    if (user.verify !== false) {
        throw new BadRequest("Verification has already been passed");
    }

    const verificationToken = uuidv4();
    updateUserByEmail(email, { verificationToken });

    await sendMail(email, verificationToken);

    res.status(200).json({
        status: 200,
        message: "Verification email sent",
    });
};

module.exports = resendEmail;
