const mongoose = require('mongoose');

async function connectMongoDB(url) {
    try {
        await mongoose.connect(url);
        console.log("MongoDB connected");
    } catch (error) {
        console.log("Error connecting to MongoDB");
    }
}

module.exports = {connectMongoDB};