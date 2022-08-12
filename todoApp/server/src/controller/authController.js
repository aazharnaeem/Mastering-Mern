const { userModel } = require('../model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({
    path: path.resolve(__dirname, '../config/.env')
})

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const exUser = await userModel.findOne({ email: email });

        if (!exUser) {
            res.status(400).send({ message: 'no account assiciated with this email', sucess: false })
        }
        const validate = await bcrypt.compare(password, exUser.password)
        if (!validate) {
            res.status(400).send({ message: 'password not matched', sucess: false });
        }
        const TOKEN_SECRET = process.env.TOKEN_SECRET;
        const token = jwt.sign({
            id: exUser._id,
        },
            TOKEN_SECRET
        );

        res.status(200).send({ token: token, message: 'login sucess', sucess: true })
    }
    catch (error) {
        res.status(500).send({ error: error, message: 'error' })
    }
}

const register = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        const exUser = await userModel.findOne({ email: email });
        if (exUser) {
            return res.status(400).send({ message: 'email already taken', sucess: false });
        }

        const newUser = new userModel({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        })
        newUser.save();
        res.status(200).send({ message: 'account created sucessfully', sucess: true })
    }
    catch (error) {
        res.status(500).send({ error: error, message: 'error' })
    }
}
const changePassword = async (req, res) => {
    try {

    }
    catch (error) {
        res.status(500).send({ error: error, message: 'error' })
    }
}
module.exports = {
    login,
    register,
    changePassword
}