const auth = require('./authRoutes');
const user = require('./userRoutes')

module.exports = {
    authRouter: auth,
    userRoutes: user
}