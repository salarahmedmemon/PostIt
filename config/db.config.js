const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    await mongoose.connect(`mongodb://${process.env.BASE_URL}/${process.env.DB_NAME}`)
    .then(() => console.log("database connected."))
    .catch(() => console.error("database not connected."))
}

module.exports = connectDB;