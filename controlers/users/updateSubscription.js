const { NotFound } = require("http-errors");

const {
    users: { updateUserById },
} = require("../../service");

const updateSubscription = async (req, res) => {
    const { _id: userId } = req.user;
    const { subscription } = req.body;

    const result = await updateUserById(userId, subscription);

    if (!result) {
        throw NotFound("Not found");
    }

    res.status(200).json({
        status: 200,
        message: "user subscription updated",
        data: { user: result },
    });
};

module.exports = updateSubscription;
