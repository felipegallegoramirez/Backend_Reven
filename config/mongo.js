const mongoose = require('mongoose')

//http://localhost:3000/api/user

const dbConnect = () => {
    const DB_URI = process.env.DB_URI || "mongodb://0.0.0.0:27017/GemelasAI"
    mongoose.connect(DB_URI)  .then((res) => console.log("db is connected"))
    .catch((err) => console.error(err));
}

module.exports = dbConnect