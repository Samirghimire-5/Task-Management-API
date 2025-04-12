const Joi = require("joi");

const taskUpdateValidation = Joi.object({
  title: Joi.string().optional(),
  description: Joi.string().optional(),
  status: Joi.string().valid("pending", "in-progress", "completed").optional(),
});

module.exports = taskUpdateValidation;