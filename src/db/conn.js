const mongoose = require("mongoose");
require("dotenv").config(); // dotenv ko load karo

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connection successful.."))
.catch((err) => console.log("Connection not successful", err));
