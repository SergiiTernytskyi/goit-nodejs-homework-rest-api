const Joi = require("joi");

const joiSubscriptionSchema = Joi.object({
    subscription: Joi.boolean().valid("starter", "pro", "business").required(),
});

module.exports = joiSubscriptionSchema;
