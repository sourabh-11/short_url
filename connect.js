const mongoose = require('mongoose')


async function ConnectToMongoose(url) {
    return mongoose.connect(url)
}

module.exports  ={ ConnectToMongoose}