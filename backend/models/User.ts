const mongoose = require("mongoose");
import { Document, model, Model, Schema } from 'mongoose';

const userSchema: Schema = new Schema({
    username: {
        type: String,
        required: true,
        unique: 1
    },
    nickname: {
        type: String,
        required: true,
        trim: true,
    },
    accessToken: {
        type: String,
        required: true,
        trim: true
    }
});

export const User = mongoose.model("User", userSchema);