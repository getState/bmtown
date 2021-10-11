const mongoose = require("mongoose");
import { Document, model, Model, Schema } from 'mongoose';

const userSchema: Schema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5,
    },
});

export const User = mongoose.model("User", userSchema);