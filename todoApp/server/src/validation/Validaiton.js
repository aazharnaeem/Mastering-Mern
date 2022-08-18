const Joi = require('joi')


const registerValidation ={
    body: Joi.object().keys({
        firstName:Joi.string().required(),
        lastName:Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    })
}

module.exports ={
    registerValidation
}