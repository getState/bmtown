const mongoose = require("mongoose");

import { Document, model, Model, Schema } from "mongoose";



const DatabaseURL = () => {
    return `mongodb://27.96.135.47:27017/test`
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