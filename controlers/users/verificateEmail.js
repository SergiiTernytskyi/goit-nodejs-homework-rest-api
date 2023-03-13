const { NotFound } = require("http-errors");

const {
    users: { getUserByVerificationToken, updateUserById },
} = require("../../service");

const verificateEmail = async (req, res) => {
    const { verificationToken } = req.params;
    const user = await getUserByVerificationToken(verificationToken);

    if (!user) {
        throw new NotFound("User not found");
    }

    await updateUserById(user._id, { verify: true, verificationToken: null });

    res.status(200).json({
        status: 200,
        message: "Verification successful",
    });
};

module.exports = verificateEmail;
