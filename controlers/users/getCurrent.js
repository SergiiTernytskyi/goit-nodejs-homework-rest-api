const getCurrent = async (req, res) => {
    console.log(req.user);

    res.status(200).json({
        status: 200,
        message: "succsess",
        data: {
            user: {
                email: req.user.email,
                subscription: req.user.subscription,
            },
        },
    });
};

module.exports = getCurrent;
