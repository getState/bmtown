const mongoose = require("mongoose");
import { Document, model, Model, Schema } from 'mongoose';

const userSchema: Schema = new Schema({
    userId: {
        type: String,
        required: true,
        unique: 1
    },
    nickname: {
        type: String,
        required: true,
        trim: true,
    },
    githubId: {
        type: String,
        required: true,
        trim: true
    }
});

export const User = mongoose.model("User", userSchema);