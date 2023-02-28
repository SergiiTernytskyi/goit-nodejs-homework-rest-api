const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const tokenCreate = (user) => {
    const payload = {
        id: user._id,
    };

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
    return token;
};

module.exports = tokenCreate;
