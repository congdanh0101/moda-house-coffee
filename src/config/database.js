const mongooes = require('mongoose')
require('dotenv').config()


async function connectDB() {
    try {
        await mongooes.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect successfully')
    } catch (error) {
        console.log('Connect failure');
    }
}

module.exports = {connectDB};