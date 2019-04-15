"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    gender: String,
    weight: Number,
    height: Number,
    age: Number
}, { timestamps: { createdAt: 'created_at' } });
module.exports = mongoose.model('User', UserSchema);
//# sourceMappingURL=model.js.map