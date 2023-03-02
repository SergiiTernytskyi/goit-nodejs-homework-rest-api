const { Unauthorized } = require("http-errors");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const {
    users: { getUserById },
} = require("../service");

const auth = async (req, res, next) => {
    try {
        const { authorization = "" } = req.headers;

        const [tokenType, token] = authorization.split(" ");

        if (tokenType !== "Bearer" || !token) {
            throw new Unauthorized("Not authorized");
        }

        const { id } = jwt.verify(token, SECRET_KEY);

        const user = await getUserById(id);

        if (!user || !user.token || user.token !== token) {
            throw new Unauthorized("Not authorized");
        }
        req.user = user;

        next();
    } catch (error) {
        error.status = 401;
        next(error);
    }
};

module.exports = auth;
