const joi = require('joi');


const userValidation = joi.object.keys({
    firstName: joi.string().min(3).max(8).required(),
    lastName: joi.string().min(3).max(8).required(),
    email: joi.string().email(),
    password: joi.string()
        // .minOfSpecialCharacters(1)
        .minOfLowercase(7)
        .minOfUppercase(1)
        .minOfNumeric(1)
        .noWhiteSpaces()
        .required()
});

const todoValidaiton =joi.object.keys({
    user:joi.string().hex().length(24).required(),
    todo:joi.string().required()
})

module.exports = {
    userValidation,
    todoValidaiton
}
