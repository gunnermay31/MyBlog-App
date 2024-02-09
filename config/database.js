const mongoose = require("mongoose");

require("dotenv").config();

const connectwithDb = async function () {
    mongoose.connect(process.env.DATABASE_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true, // Corrected typo here
    })
    .then(() => console.log("DB connected successfully"))
    .catch((err) => {
        console.error("DB is facing an issue");
        console.error(err);
        process.exit(1);
    });
}

module.exports = connectwithDb;
