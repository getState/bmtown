const mongoose = require("mongoose");


const DatabaseURL = () => {
    return process.env.DB_HOST
}

export const connect = () => {
    try {
        mongoose.connect(`${DatabaseURL()}`);
        console.log("Connection to Mongo Success");
    }
    catch (err) {
        console.log(err);
    }
}