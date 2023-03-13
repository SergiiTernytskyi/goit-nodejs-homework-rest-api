const Joi = require("joi");

const joiEmailValidateSchema = Joi.object({
    email: Joi.string()
        .email({
            minDomainSegments: 2,
            tlds: { allow: ["com", "net"] },
        })
        .required(),
});

module.exports = joiEmailValidateSchema;
