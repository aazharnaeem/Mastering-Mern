const app = require('./App');
const dotenv = require('dotenv');
const path = require('path');
const connection = require('./config/db');

dotenv.config({
    path: path.resolve(__dirname, './config/.env')
});



connection.once('open', () => {
    console.log(`database connected`);
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`server listening to localhost${PORT}`);
});