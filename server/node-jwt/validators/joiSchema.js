const Joi = require("joi");

const schema = Joi.object({
  email: Joi.string().min(4).max(30).email().trim().required(),
  password: Joi.string().min(5).max(50).trim().alphanum().required(),
});

module.exports = schema;
