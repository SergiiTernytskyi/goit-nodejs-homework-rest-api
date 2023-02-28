const Joi = require("joi");

const joiRegisterSchema = Joi.object({
    email: Joi.string()
        .email({
            minDomainSegments: 2,
            tlds: { allow: ["com", "net"] },
        })
        .required(),
    password: Joi.string().alphanum().min(6).required(),
});

module.exports = joiRegisterSchema;
