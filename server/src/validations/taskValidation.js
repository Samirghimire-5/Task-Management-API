const Joi = require("joi")

const taskValidation = Joi.object({
  title: Joi.string().required(), 
  description: Joi.string().required(),
  status: Joi.string().valid('pending', 'in-progress', 'completed'),
}) 

module.exports = taskValidation